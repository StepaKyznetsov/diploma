import React, { useState } from "react";
import css from "./MenuItem.module.scss";
import { IMenuItem } from "../../interfaces/MenuItem";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

const MenuItem: React.FC<IMenuItem> = ({
  text,
  icon,
  description,
  type = "navigation",
  href,
}) => {
  const navigate = useNavigate();
  const [choosen, setChoosen] = useState<boolean>(false);

  const navigateTo = (href: string | undefined) => {
    href && navigate(href);
  };

  return (
    <div
      onClick={() => {
        if (type === "navigation") navigateTo(href);
        else setChoosen(!choosen)
      }}
      className={classNames({ [css.choosen]: choosen }, css.container)}
    >
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
