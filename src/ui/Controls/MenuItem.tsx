import React from "react";
import css from "./Controls.module.scss";
import { IMenuItem } from "../../interfaces/Controls";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../../constants";
import { useTypedSelector } from "../../hooks";

const MenuItem: React.FC<IMenuItem> = ({
  text,
  icon,
  description,
  href,
  redirectToLogin = false,
}) => {
  const navigate = useNavigate();
  const { name, surname } = useTypedSelector((state) => state.user);

  const goTo = (href: string): void => {
    redirectToLogin && !(name && surname) ? navigate(LOGIN) : navigate(href);
  };

  return (
    <div
      onClick={() => href && goTo(href)}
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
