import React from "react";
import css from "./GameContainer.module.scss";

interface IGameContainer {
  children: React.ReactNode;
}

const GameContainer: React.FC<IGameContainer> = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};

export default GameContainer;
