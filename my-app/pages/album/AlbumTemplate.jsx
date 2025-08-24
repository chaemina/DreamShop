"use client";

import React from "react";
import GridFrame from "../../shared/ui/GridFrame";

const ROOT_FOLDER_ID = "1VTSKoJSnZdwRRkJelFgFmhHB8pK_Izko"; 

const AlbumTemplate = () => {
  const [photos, setPhotos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const res = await fetch(`/api/drive?folderId=${encodeURIComponent(ROOT_FOLDER_ID)}`, {
          cache: "no-store",
        });
        const ct = res.headers.get("content-type") || "";
        const body = ct.includes("application/json") ? await res.json() : await res.text();
        if (!res.ok) {
          const msg = typeof body === "string" ? body : body?.error || "Failed to fetch";
          throw new Error(msg);
        }
        if (typeof body === "string") {
          throw new Error("API가 JSON 대신 HTML을 반환했습니다.\n" + body.slice(0, 200));
        }
        setPhotos(body.photos || []);
      } catch (err) {
        setError(err?.message || "오류가 발생했어요");
      } finally {
        setLoading(false);
      }
    };
    fetchPhotos();
  }, []);

  if (loading) return <div className="p-10">Loading…</div>;
  if (error) return <div className="p-10 text-red-600 whitespace-pre-wrap">{error}</div>;
  if (!photos.length) return <div className="p-10">표시할 사진이 없어요.</div>;

  return (
    <div className="p-10">
      <GridFrame columns={{ mobile: 1, laptop: 3, desktop: 4 }}>
        {photos.map((photo) => (
          <div key={photo.id} className="flex flex-col items-center justify-center laptop:p-6">
            <p className="text-xs opacity-60 mb-1">{photo.displayPath || photo.name}</p>

            <img
              src={photo.src}
              alt={photo.name}
              className="w-full h-auto rounded-xl shadow mb-2"
              loading="lazy"
              onError={(e) => {
                const t = e.currentTarget;
                if (photo.fallback1 && t.src !== photo.fallback1) {
                  t.src = photo.fallback1; return;
                }
                if (photo.fallback2 && t.src !== photo.fallback2) {
                  t.src = photo.fallback2; return;
                }
              }}
            />
          </div>
        ))}
      </GridFrame>
    </div>
  );
};

export default AlbumTemplate;
