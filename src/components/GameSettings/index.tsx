import React, { useEffect } from "react";
import css from "./GameSettings.module.scss";
import axios from "axios";
import { BiBookOpen, BiTimer } from "react-icons/bi";
import { MdCastForEducation } from "react-icons/md";
import BackArrow from "../../ui/BackArrow";
import SettingsContainer from "../../ui/SettingsContainer";
import MenuItem from "../../ui/Controls/MenuItem";
import SettingsItem from "../../ui/Controls/SettingsItem";
import { useTypedSelector, useActions } from "../../hooks";
import { PLAY } from "../../constants";

const GameSettings: React.FC = () => {
  const { resetSettings, setCurrentQuestions } = useActions();
  const { gameMode, questionsAmount, time } = useTypedSelector(
    (state) => state.settings
  );

  const getQuestions = async () => {
    const response = await axios.get("/mocks/questions.json");
    setCurrentQuestions(response.data, questionsAmount);
  };

  const modeGuards = (): boolean => {
    if (gameMode === "blitz" && !time) return false;
    return true;
  };

  useEffect(() => {
    resetSettings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SettingsContainer>
      <BackArrow />
      <div className={`${css.inner} ${css.visible}`}>
        <div className={css.title}>
          <h2>Настройки режима игры</h2>
        </div>
        <div className={css.settingsBlock}>
          <SettingsItem
            text="Приключение"
            icon={<BiBookOpen />}
            selector={gameMode}
            setting="classic"
          />
          <SettingsItem
            text="Блиц режим"
            icon={<BiTimer />}
            selector={gameMode}
            setting="blitz"
          />
          <SettingsItem
            text="Вариант учителя"
            icon={<MdCastForEducation />}
            selector={gameMode}
            setting="infinity"
          />
        </div>

        {/* Выбор количества заданий */}

        {gameMode === "blitz" && (
          <div className={css.settingsBlock}>
            <SettingsItem text="1 минута" selector={time} setting={60} />
            <SettingsItem text="2 минуты" selector={time} setting={120} />
            <SettingsItem text="3 минуты" selector={time} setting={180} />
          </div>
        )}
        <div className={css.playButton} onClick={() => getQuestions()}>
          {modeGuards() && (
            <MenuItem text="Играть" description="Начать игру" href={PLAY} />
          )}
        </div>
      </div>
      <div className={css.characterRight}>
        <img src="/images/character2.png" alt="character" />
      </div>
      <div className={css.characterLeft}>
        <img src="/images/character4.png" alt="character" />
      </div>
    </SettingsContainer>
  );
};

export default GameSettings;
