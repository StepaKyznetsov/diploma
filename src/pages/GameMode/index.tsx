import React from "react";
import GameSettings from "../../components/GameSettings";
import SplashScreen from "../../components/SplashScreen";

const GameMode: React.FC = () => {
  return (
    <main>
      <SplashScreen text="К выбору режима игры" />
      <GameSettings />
    </main>
  );
};

export default GameMode;
