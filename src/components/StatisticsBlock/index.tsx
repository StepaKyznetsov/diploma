import React from "react";
import css from "./StatisticsBlock.module.scss";
import StatisticsSpecific from "../StatisticsSpecific";
import { useTypedSelector } from "../../hooks";
import { GameMode } from "../../redux/types/settings";

const StatisticsBlock: React.FC = () => {
  const { name, surname } = useTypedSelector((state) => state.user);

  const modes: GameMode[] = ["classic", "blitz", "infinity"];

  return (
    <div className={css.container}>
      <h2>
        Статистика за все время({name} {surname})
      </h2>
      {modes.map((e, index) => (
        <StatisticsSpecific key={index} gameMode={e} />
      ))}
    </div>
  );
};

export default StatisticsBlock;
