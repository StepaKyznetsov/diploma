import React from "react";
import css from "./Header.module.scss";

const Header: React.FC = () => { 
  return (
    <header>
      <div className={css.container}>
        <div className={css.inner}>
          <span>Таблица результатов</span>
          <span>Добавить задание</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
