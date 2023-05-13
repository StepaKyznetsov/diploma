import React from "react";
import css from "./Controls.module.scss";
import { IMenuItem } from "../../interfaces/Controls";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../../constants";

const MenuItem: React.FC<IMenuItem> = ({
  text,
  icon,
  description,
  href,
  redirectToLogin = false,
}) => {
  const navigate = useNavigate();

  const goTo = (href: string): void => {
    redirectToLogin ? navigate(LOGIN) : navigate(href);
  };

  return (
    <div onClick={() => href && goTo(href)} className={css.container}>
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
