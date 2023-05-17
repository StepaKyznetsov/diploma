import React from "react";
import SplashScreen from "../../components/SplashScreen";
import CurrentStatistics from "../../components/CurrentStatistics";

export const GameOver: React.FC = () => {
  return (
    <main>
      <SplashScreen text="Результаты" />
      <CurrentStatistics />
    </main>
  );
};

export default GameOver;
