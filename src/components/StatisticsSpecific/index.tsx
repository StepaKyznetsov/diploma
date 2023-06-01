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
      {modesStatistics?.length !== 0 && (
        <div className={css.container}>
          <div className={css.inner}>
            <span className={css.title}>{gameModeRu}</span>
            {modesStatistics?.map((e, index) => (
              <div key={index}>
                <div className={css.modeSolo}>
                  {gameModeRu === 'Варианты учителя' ? (
                   <span>Вариант: "{e.groupName}"</span>
                  ) : (
                    <span>Попытка № {index + 1}</span>
                  )}
                  <div className={css.modeRow}>
                    <span>Верно:</span>
                    <span> {e.correctlyAnswers}</span>
                  </div>
                  <div className={css.modeRow}>
                    <span>Неверно:</span>
                    <span> {e.wrongAnswers}</span>
                  </div>
                </div>
                {e.details && (
                  <div className={css.details}>
                    {e.details.map((e, index) => (
                      <span
                        className={
                          e.correctAnswer ? css.correctAnswer : css.wrongAnswer
                        }
                        key={index}
                      >
                        {e.questionIndex}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default StatisticsSpecific;
