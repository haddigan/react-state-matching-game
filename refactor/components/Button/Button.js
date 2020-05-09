import React from "react";
import GameContext from "../../GameContext";
import "./Button.css";

const Button = () => (
  <GameContext.Consumer>
    {({ playing, startGame }) => {
      return <button onClick={startGame}>{playing ? "reset" : "start"}</button>;
    }}
  </GameContext.Consumer>
);

export default Button;
