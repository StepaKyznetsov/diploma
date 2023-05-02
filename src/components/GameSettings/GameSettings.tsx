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
              isChoosen: gameMode,
              onClickHandler: setMode,
            },
            {
              text: "Блиц",
              icon: <BiTimer />,
            },
            {
              text: "Бесконечный режим",
              icon: <BiInfinite />,
            },
          ]}
        />
        {gameMode && (
          <MenuList
            items={[
              {
                text: "10 вопросов",
              },
              {
                text: "20 вопросов",
                isChoosen: questionsAmount,
                onClickHandler: setAmount,
              },
              {
                text: "30 вопросов",
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
