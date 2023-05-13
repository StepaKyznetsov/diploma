import React from "react";
import Menu from "../../components/Menu";
import SplashScreen from "../../components/SplashScreen";
import CurrentUser from "../../components/CurrentUser";

const Main: React.FC = () => {
  return (
    <main>
      <SplashScreen text="Добро пожаловать!" />
      <CurrentUser />
      <Menu />
    </main>
  );
};

export default Main;
