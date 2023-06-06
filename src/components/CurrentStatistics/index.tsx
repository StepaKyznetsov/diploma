import React from "react";
import css from "./CurrentStatistics.module.scss";
import MenuItem from "../../ui/Controls/MenuItem";
import { MAIN } from "../../constants";
import { useTypedSelector } from "../../hooks";
import CharacterLine from "../CharacterLine";
import { resultText, resultImages } from "../../constants";

const CurrentStatistics: React.FC = () => {
  const { persons } = useTypedSelector((state) => state.statistics);
  const { name, surname, type } = useTypedSelector((state) => state.user);

  const currentStatistics = persons
    .find(
      (e) => e.name === name && e.surname === surname && e.userType === type
    )
    ?.personalStatistics.slice(-1);

  const result =
    currentStatistics &&
    (currentStatistics[0].result === "victory"
      ? "Победа"
      : currentStatistics[0].result === "loss"
      ? "Проигрыш"
      : "Неплохая попытка");

  const resultIndex =
    result === "Победа" ? 0 : result === "Неплохая попытка" ? 1 : 2;

    return (
    <div className={css.container}>
      <CharacterLine
        text={resultText[resultIndex]}
        imgSrc={resultImages[resultIndex]}
      />
      <div className={css.inner}>
        <h2>Статистика за текущую попытку:</h2>
        {currentStatistics && (
          <>
            <div className={css.answers}>
              <span>Итог: </span>
              <span>{result}</span>
            </div>
            <div className={css.answers}>
              <span>Среднее количество очков: </span>
              <span>{currentStatistics[0].averageScores}</span>
            </div>
            <div className={css.answers}>
              <span className={css.correctly}>Верных ответов:</span>
              <span>{currentStatistics[0].correctlyAnswers}</span>
            </div>
            <div className={css.answers}>
              <span className={css.wrong}>Неверных ответов:</span>
              <span>{currentStatistics[0].wrongAnswers}</span>
            </div>
          </>
        )}
        <MenuItem
          text="Главная"
          description="Вернуться на главную страницу"
          href={MAIN}
        />
      </div>
    </div>
  );
};

export default CurrentStatistics;
