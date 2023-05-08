import React, { useEffect } from "react";
import css from "./GameSettings.module.scss";
import BackArrow from "../../ui/BackArrow/BackArrow";
import SettingsContainer from "../../ui/SettingsContainer/SettingsContainer";
import { BiGame, BiTimer, BiInfinite } from "react-icons/bi";
import MenuItem from "../../ui/Controls/MenuItem";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import SettingsItem from "../../ui/Controls/SettingsItem";
import { useActions } from "../../hooks/useActions";
import axios from "axios";

const GameSettings: React.FC = () => {
  const { resetSettings, setCurrentQuestions } = useActions();
  const { gameMode, questionsAmount, time } = useTypedSelector(
    (state) => state.settings
  );

  const getQuestions = async () => {
    const response = await axios.get("/mocks/questions.json");
    setCurrentQuestions(response.data, questionsAmount)
  };

  useEffect(() => {
    resetSettings();
  }, []);

  return (
    <SettingsContainer>
      <BackArrow />
      <div className={`${css.inner} ${css.visible}`}>
        <div className={css.title}>
          <h2>Настройки режима</h2>
        </div>
        <div className={css.settingsBlock}>
          <SettingsItem
            text="Классический режим"
            icon={<BiGame />}
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
            text="Бесконечный режим"
            icon={<BiInfinite />}
            selector={gameMode}
            setting="infinity"
          />
        </div>
        {gameMode !== "infinity" && (
          <div className={css.settingsBlock}>
            <SettingsItem
              text="10 вопросов"
              selector={questionsAmount}
              setting={10}
            />
            <SettingsItem
              text="20 вопросов"
              selector={questionsAmount}
              setting={20}
            />
            <SettingsItem
              text="30 вопросов"
              selector={questionsAmount}
              setting={30}
            />
          </div>
        )}
        {gameMode !== "classic" && gameMode !== "infinity" && (
          <div className={css.settingsBlock}>
            <SettingsItem text="1 минута" selector={time} setting={60} />
            <SettingsItem text="2 минуты" selector={time} setting={120} />
            <SettingsItem text="3 минуты" selector={time} setting={180} />
          </div>
        )}
        <div
          className={css.playButton}
          onClick={() => getQuestions()}
        >
          <MenuItem text="Играть" href="/gamemode" />
        </div>
      </div>
    </SettingsContainer>
  );
};

export default GameSettings;
