import React from "react";
import BackArrow from "../../ui/BackArrow";
import SplashScreen from "../../components/SplashScreen";
import AboutProject from "../../components/AboutProject";

const Authors: React.FC = () => {
  return (
    <main>
      <BackArrow />
      <SplashScreen text="К авторам игры" />
      <AboutProject />
    </main>
  );
};

export default Authors;
