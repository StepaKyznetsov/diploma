import React from "react";
import css from "./LeadersList.module.scss";
import { useTypedSelector } from "../../hooks";

const LeadersList: React.FC = () => {
  const { persons } = useTypedSelector((state) => state.statistics);

  const records = persons.filter(
    (e) =>
      e.personalStatistics.filter(
        (e) => e.averageScores && +e.averageScores > 0
      ).length
  );

  return (
    <div className={css.container}>
      <div className={css.inner}>
        <h3>Таблица рекордов</h3>
        <div className={css.table}>
          <div className={css.head}>
            <span>Игрок</span>
            <span>Средний балл за игру</span>
          </div>
          <ul>
            {records.map((e, index) => (
              <li key={index}>
                <span>
                  {e.name} {e.surname}
                </span>
                {e.personalStatistics
                  .sort(
                    (a, b) => Number(a.averageScores) - Number(b.averageScores)
                  )
                  .slice(-1)
                  .map((e, index) => (
                    <span key={index}>{e.averageScores}</span>
                  ))}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeadersList;
