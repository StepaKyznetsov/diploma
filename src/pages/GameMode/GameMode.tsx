import React from "react";
import GameSettings from "../../components/GameSettings/GameSettings";
import SplashScreen from "../../components/SplashScreen/SplashScreen";

const GameMode: React.FC = () => {
  return (
    <>
      <SplashScreen text="Переход в выбору режима игры" />
      <GameSettings />
    </>
  );
};

export default GameMode;
