import React from "react";
import Menu from "../../components/Menu/Menu";
import SplashScreen from "../../components/SplashScreen/SplashScreen";

const Main: React.FC = () => {
  return (
    <>
      <SplashScreen text="Добро пожаловать!" />
      <Menu />
    </>
  );
};

export default Main;
