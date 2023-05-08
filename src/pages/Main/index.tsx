import React from "react";
import Menu from "../../components/Menu";
import SplashScreen from "../../components/SplashScreen";

const Main: React.FC = () => {
  return (
    <main>
      <SplashScreen text="Добро пожаловать!" />
      <Menu />
    </main>
  );
};

export default Main;
