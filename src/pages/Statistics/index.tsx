import React from "react";
import SplashScreen from "../../components/SplashScreen";
import BackArrow from "../../ui/BackArrow";
import StatisticsBlock from "../../components/StatisticsBlock";

const Statistics: React.FC = () => {

  return (
    <main>
      <BackArrow />
      <SplashScreen text="К статистике" />
      <StatisticsBlock />
    </main>
  );
};

export default Statistics;
