import React, { useState, useEffect } from "react";
import css from "./SplashScreen.module.scss";
import classNames from "classnames";
import { MagnifyingGlass } from "react-loader-spinner";

const SplashScreen: React.FC = () => {
  const [showSplashScreen, setShowSplashScreen] = useState<boolean>(true);
  const [hideAnimation, setHideAnimation] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideAnimation(true);
      setTimeout(() => {
        setShowSplashScreen(false);
      }, 1000);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (showSplashScreen) {
    return (
      <div className={classNames({ [css.hide]: hideAnimation }, css.container)}>
        <div className={css.inner}>
          <h2>Добро пожаловать!</h2>
          <MagnifyingGlass
            visible={true}
            height="100"
            width="100"
            wrapperStyle={{}}
            glassColor="white"
            color="black"
          />
        </div>
      </div>
    );
  }

  return null;
};

export default SplashScreen;
