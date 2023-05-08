import React from "react";
import css from "./Controls.module.scss";
import { ISettingsItem } from "../../interfaces/Controls";
import classNames from "classnames";
import { useActions } from "../../hooks/useActions";
import { GameMode, QuestionsAmount, Time } from "../../redux/types/settings";

const SettingsItem: React.FC<
  ISettingsItem<GameMode | QuestionsAmount | Time>
> = ({ selector, setting, icon, text }) => {
  
  const { setCurrentGameMode, setCurrentQuestionsAmount, setCurrentTime } = useActions();
  const isGameMode = setting === "classic" || setting === "blitz" || setting === "infinity";
  const isQuestionsAmount = setting === 10 || setting === 20 || setting === 30;
  const isTime = setting === 60 || setting === 120 || setting === 180;

  const changeGameMode = (mode: GameMode) => {
    setCurrentQuestionsAmount(null);
    setCurrentTime(null);
    setCurrentGameMode(mode);
  };

  return (
    <div
      onClick={() => {
        isGameMode && changeGameMode(setting);
        isQuestionsAmount && setCurrentQuestionsAmount(setting);
        isTime && setCurrentTime(setting);
      }}
      className={classNames(
        { [css.choosen]: selector === setting },
        css.container
      )}
    >
      <span>{text}</span>
      {icon && icon}
    </div>
  );
};

export default SettingsItem;
