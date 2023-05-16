import React from "react";
import MenuItem from "../../ui/Controls/MenuItem";
import { MAIN } from "../../constants";
import SplashScreen from "../../components/SplashScreen";

export const GameOver: React.FC = () => {
  return (
    <main>
      <SplashScreen text="Результаты" />
      <MenuItem
        text="Главная"
        description="Вернуться на главную страницу"
        href={MAIN}
      />
    </main>
  );
};

export default GameOver;
