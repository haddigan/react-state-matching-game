import React from "react";

import "./Tile.css";

const Tile = ({ selected, matched, color, svg: Svg }) => {
  const selectedOrMatched = selected || matched;
  const style = selectedOrMatched ? { backgroundColor: color } : null;

  return (
    <div className="Tile" style={style}>
      {selectedOrMatched ? <Svg /> : null}
    </div>
  );
};

export default Tile;
