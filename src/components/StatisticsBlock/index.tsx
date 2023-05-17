import React from "react";
import css from "./StatisticsBlock.module.scss";
import StatisticsSpecific from "../StatisticsSpecific";

const StatisticsBlock: React.FC = () => {
  return (
    <div className={css.container}>
      <h2>Статистика за все время</h2>
      <StatisticsSpecific gameMode="classic" />
      <StatisticsSpecific gameMode="blitz" />
      <StatisticsSpecific gameMode="infinity" />
    </div>
  );
};

export default StatisticsBlock;
