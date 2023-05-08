import React from "react";
import css from "./Banner.module.scss";

const Banner: React.FC = () => {
  return (
    <div className={css.container}>
      <h1>Название игры</h1>
    </div>
  );
};

export default Banner;
