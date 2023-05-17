import React from "react";
import css from "./StatisticsSpecific.module.scss";
import { GameMode } from "../../redux/types/settings";
import { useTypedSelector } from "../../hooks";

interface IStatisticsSpecific {
  gameMode: GameMode;
}

const StatisticsSpecific: React.FC<IStatisticsSpecific> = ({ gameMode }) => {
  const { persons } = useTypedSelector((state) => state.statistics);
  const { name, surname, type } = useTypedSelector((state) => state.user);

  const modesStatistics = persons
    .find(
      (e) => e.name === name && e.surname === surname && e.userType === type
    )
    ?.personalStatistics.filter((e) => e.type === gameMode);

  const gameModeRu =
    gameMode === "classic"
      ? "Приключение"
      : gameMode === "blitz"
      ? "Блиц"
      : "Варианты учителя";

  return (
    <>
      {modesStatistics && (
        <div className={css.container}>
          <div className={css.inner}>
            <span className={css.title}>{gameModeRu}</span>
            {modesStatistics.map((e, index) => (
              <div className={css.modeSolo} key={index}>
                <span>Попытка № {index + 1}</span>
                <div className={css.modeRow}>
                  <span>Верно:</span>
                  <span> {e.correctlyAnswers}</span>
                </div>
                <div className={css.modeRow}>
                  <span>Неверно:</span>
                  <span> {e.wrongAnswers}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default StatisticsSpecific;
