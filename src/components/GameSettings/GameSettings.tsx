import React from "react";
import css from "./GameSettings.module.scss";
import BackArrow from "../../ui/BackArrow/BackArrow";
import SettingsContainer from "../../ui/SettingsContainer/SettingsContainer";

const GameSettings: React.FC = () => {
  return (
    <SettingsContainer>
      <BackArrow />
      <div className={`${css.inner} ${css.visible}`}>
        <div className={css.title}>
          <h2>Настройки режима</h2>
        </div>    
      </div>
    </SettingsContainer>
  );
};

export default GameSettings;
