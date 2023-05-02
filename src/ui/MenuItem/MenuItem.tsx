import React from "react";
import css from "./MenuItem.module.scss";
import { IMenuItem } from "../../interfaces/MenuItem";

const MenuItem: React.FC<IMenuItem> = ({ text, onClickHandler, icon, description }) => {
  return (
    <div onClick={onClickHandler} className={css.container}>
      <span>
        {text}
      </span>
      {icon}
      <div className={css.description}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default MenuItem;
