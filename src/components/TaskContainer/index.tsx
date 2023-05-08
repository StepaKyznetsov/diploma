import React from "react";
import css from "./GameContainer.module.scss";

interface ITaskContainer {
  children: React.ReactNode;
}

const TaskContainer: React.FC<ITaskContainer> = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};

export default TaskContainer;
