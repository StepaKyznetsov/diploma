import React from "react";
import css from "./MenuItem.module.scss";
import { IMenuItem } from "../../interfaces/MenuItem";
import classNames from "classnames";

const MenuItem: React.FC<IMenuItem> = ({
  text,
  onClickHandler,
  icon,
  description,
  isChoosen = false
}) => {
  return (
    <div onClick={onClickHandler} className={classNames({[css.choosen]: isChoosen}, css.container)}>
      <span>{text}</span>
      {icon && icon}
      {description && (
        <div className={css.description}>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default MenuItem;
