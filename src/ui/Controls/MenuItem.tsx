import React from "react";
import css from "./Controls.module.scss";
import { IMenuItem } from "../../interfaces/Controls";
import { useNavigate } from "react-router-dom";

const MenuItem: React.FC<IMenuItem> = ({
  text,
  icon,
  description,
  href
}) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => href && navigate(href)}
      className={css.container}
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
