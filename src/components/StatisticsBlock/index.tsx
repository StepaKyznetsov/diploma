import React from "react";
import css from "./StatisticsBlock.module.scss";
import StatisticsSpecific from "../StatisticsSpecific";
import {useTypedSelector} from '../../hooks'

const StatisticsBlock: React.FC = () => {
  const {name, surname} = useTypedSelector(state => state.user)
  
  return (
    <div className={css.container}>
      <h2>Статистика за все время({name} {surname})</h2>
      <StatisticsSpecific gameMode="classic" />
      <StatisticsSpecific gameMode="blitz" />
      <StatisticsSpecific gameMode="infinity" />
    </div>
  );
};

export default StatisticsBlock;
