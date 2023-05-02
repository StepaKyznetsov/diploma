import React from "react";
import css from "./Menu.module.scss";
import Button from "../../ui/Button/Button";
import SettingsContainer from "../../ui/SettingsContainer/SettingsContainer";

const Menu: React.FC = () => {
  return (
    <SettingsContainer>
      <div className={css.inner}>
        <div className={css.title}>
          <h2>Название игры</h2>
        </div>
        <Button text="Играть" />
        <Button text="Авторы" />
      </div>
    </SettingsContainer>
  );
};

export default Menu;
