import React, { useState } from "react";
import css from "./GameSettings.module.scss";
import BackArrow from "../../ui/BackArrow/BackArrow";
import SettingsContainer from "../../ui/SettingsContainer/SettingsContainer";
import MenuList from "../../ui/MenuList/MenuList";
import { BiGame, BiTimer, BiInfinite } from "react-icons/bi";
import MenuItem from "../../ui/MenuItem/MenuItem";
import { useNavigate } from "react-router-dom";

const GameSettings: React.FC = () => {
  const [gameMode, setGameMode] = useState<boolean>(false);
  const [time, setTime] = useState<boolean>(false);
  const [questionsAmount, setQuestionsAmount] = useState<boolean>(false);
  const navigate = useNavigate();

  const setMode = (): void => {
    setGameMode(!gameMode);
  };

  const setAmount = (): void => {
    setQuestionsAmount(!questionsAmount);
  };

  return (
    <SettingsContainer>
      <BackArrow />
      <div className={`${css.inner} ${css.visible}`}>
        <div className={css.title}>
          <h2>Настройки режима</h2>
        </div>
        <MenuList
          items={[
            {
              text: "Классический режим",
              icon: <BiGame />,
              onClickHandler: setMode,
              type: 'answer'
            },
            {
              text: "Блиц",
              icon: <BiTimer />,
              type: 'answer'
            },
            {
              text: "Бесконечный режим",
              icon: <BiInfinite />,
              type: 'answer'
            },
          ]}
        />
        {gameMode && (
          <MenuList
            items={[
              {
                text: "10 вопросов",
                type: 'answer'
              },
              {
                text: "20 вопросов",
                onClickHandler: setAmount,
                type: 'answer'
              },
              {
                text: "30 вопросов",
                type: 'answer'
              },
            ]}
          />
        )}
        {questionsAmount && (
          <div className={css.playButton}>
            <MenuItem text="Играть" onClickHandler={() => navigate("/play")} />
          </div>
        )}
      </div>
    </SettingsContainer>
  );
};

export default GameSettings;
