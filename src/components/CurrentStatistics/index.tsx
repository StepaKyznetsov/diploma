import React from "react";
import css from "./CurrentStatistics.module.scss";
import MenuItem from "../../ui/Controls/MenuItem";
import { MAIN } from "../../constants";
import { useTypedSelector } from "../../hooks";

const CurrentStatistics: React.FC = () => {
  const { persons } = useTypedSelector((state) => state.statistics);
  const { name, surname, type } = useTypedSelector((state) => state.user);

  const currentStatistics = persons
    .find(
      (e) => e.name === name && e.surname === surname && e.userType === type
    )
    ?.personalStatistics.slice(-1);

  return (
    <div className={css.container}>
      <div className={css.inner}>
        <h2>Статистика за текущую попытку:</h2>
        <div className={css.answers}>
          <span className={css.correctly}>Верных ответов:</span>
          {currentStatistics && (
            <span>{currentStatistics[0].correctlyAnswers}</span>
          )}
        </div>
        <div className={css.answers}>
          <span className={css.wrong}>Неверных ответов:</span>
          {currentStatistics && (
            <span>{currentStatistics[0].wrongAnswers}</span>
          )}
        </div>
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
