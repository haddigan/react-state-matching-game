import React from "react";

import "./Tile.css";

const Tile = ({
  id,
  color,
  handleTileClicked,
  selected,
  matched,
  svg: Svg,
}) => {
  const selectedOrMatched = selected || matched;
  const style = selectedOrMatched ? { backgroundColor: color } : null;

  return (
    <div
      className="Tile"
      style={style}
      onClick={() => {
        handleTileClicked(id, color);
      }}
    >
      {selectedOrMatched ? <Svg /> : null}
    </div>
  );
};

export default Tile;
