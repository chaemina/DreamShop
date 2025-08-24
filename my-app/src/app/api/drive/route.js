import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const FIELDS = [
  "files(" + [
    "id",
    "name",
    "mimeType",
    "parents",
    "thumbnailLink",
    "webViewLink",
    "webContentLink",
    "shortcutDetails(targetId,targetMimeType)"
  ].join(",") + ")",
  "nextPageToken"
].join(",");


const toViewSrc = (id) => `https://drive.google.com/uc?export=view&id=${id}`;       // 1순위
const toDirectTry = (id) => `https://lh3.googleusercontent.com/d/${id}=s2048`;       // 공개 강한 경우 OK
const toDownload = (id) => `https://drive.google.com/uc?export=download&id=${id}`;   // 다운로드용(표시는 비권장)


async function listOnce({ folderId, pageToken, key }) {
  const params = new URLSearchParams({
    key,
    q: `'${folderId}' in parents and trashed = false`,
    fields: FIELDS,
    pageSize: "1000",
  });
  if (pageToken) params.set("pageToken", pageToken);

  const url = `https://www.googleapis.com/drive/v3/files?${params.toString()}`;
  const r = await fetch(url, { cache: "no-store" });
  if (!r.ok) {
    const text = await r.text();
    throw new Error(`Drive API error (${r.status}): ${text.slice(0, 500)}`);
  }
  return r.json();
}

async function listFolderAllItems(folderId, key) {
  let items = [];
  let pageToken;
  do {
    const data = await listOnce({ folderId, pageToken, key });
    items = items.concat(data.files || []);
    pageToken = data.nextPageToken;
  } while (pageToken);
  return items;
}

const isShortcut = (f) => f.mimeType === "application/vnd.google-apps.shortcut";

const isFolderShortcut = (f) =>
  isShortcut(f) && f.shortcutDetails && f.shortcutDetails.targetMimeType === "application/vnd.google-apps.folder";


const isImageShortcut = (f) =>
  isShortcut(f) &&
  f.shortcutDetails &&
  (f.shortcutDetails.targetMimeType || "").startsWith("image/");

const isFolder = (f) => f.mimeType === "application/vnd.google-apps.folder";

const isImage = (f) => (f.mimeType || "").startsWith("image/");

async function collectAllImagesBFS(rootFolderId, key) {
  const queue = [{ id: rootFolderId, depth: 0, path: [] }];
  const visited = new Set();
  const photos = [];

  while (queue.length) {
    const cur = queue.shift();
    if (!cur) break;
    const { id: folderId, path } = cur;
    if (visited.has(folderId)) continue;
    visited.add(folderId);

    const items = await listFolderAllItems(folderId, key);

    for (const f of items) {
      if (isFolder(f)) {
        queue.push({ id: f.id, depth: cur.depth + 1, path: [...path, f.name] });
        continue;
      }

      if (isFolderShortcut(f)) {
        const targetId = f.shortcutDetails.targetId;
        const folderName = f.name; 
        queue.push({ id: targetId, depth: cur.depth + 1, path: [...path, folderName] });
        continue;
      }

      if (isImage(f)) {
        photos.push({
          id: f.id,
          name: f.name,
          mimeType: f.mimeType,
          displayPath: path.length ? `${path.join(" / ")} / ${f.name}` : f.name,
          src: toViewSrc(f.id),                  
          fallback1: f.thumbnailLink || null,   
          fallback2: toDirectTry(f.id),          
          downloadLink: toDownload(f.id),
          viewLink: f.webViewLink,
        });
        continue;
      }

      if (isImageShortcut(f)) {
        const targetId = f.shortcutDetails.targetId;
        const targetMime = f.shortcutDetails.targetMimeType;
        photos.push({
          id: targetId,
          name: f.name,
          mimeType: targetMime,
          displayPath: path.length ? `${path.join(" / ")} / ${f.name}` : f.name,
          src: toViewSrc(targetId),
          fallback1: f.thumbnailLink || null,
          fallback2: toDirectTry(targetId),
          downloadLink: toDownload(targetId),
          viewLink: `https://drive.google.com/file/d/${targetId}/view`,
        });
      }
    }
  }

  photos.sort((a, b) => (a.displayPath || a.name).localeCompare(b.displayPath || b.name, "ko"));
  return photos;
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const folderId = searchParams.get("folderId");
    if (!folderId) {
      return NextResponse.json({ error: "Missing folderId" }, { status: 400 });
    }

    const key = process.env.GOOGLE_API_KEY;
    if (!key) throw new Error("GOOGLE_API_KEY is missing");

    const photos = await collectAllImagesBFS(folderId, key);

    return NextResponse.json({ count: photos.length, photos });
  } catch (e) {
    return NextResponse.json(
      { error: e?.message || "Drive API error" },
      { status: 500 }
    );
  }
}
