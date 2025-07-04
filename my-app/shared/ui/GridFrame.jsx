import React from "react";

const GridFrame = ({ columns = { mobile: 1, laptop: 2, desktop: 3 }, children }) => {
  const mobileCols = columns.mobile || 1;
  const laptopCols = columns.laptop || mobileCols;
  const desktopCols = columns.desktop || laptopCols;

  const classNames = [
    `grid`,
    `gap-4`,
    `grid-cols-${mobileCols}`,
    `laptop:grid-cols-${laptopCols}`,
    `desktop:grid-cols-${desktopCols}`,
    `w-full`
  ].join(" ");

  return <div className={classNames}>{children}</div>;
};

export default GridFrame;
