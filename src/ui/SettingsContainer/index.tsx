import React from "react";
import css from "./SettingsContainer.module.scss";

interface ISettingsContainer {
  children: React.ReactNode;
}

const SettingsContainer: React.FC<ISettingsContainer> = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};

export default SettingsContainer;
