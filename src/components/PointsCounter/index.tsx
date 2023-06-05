import React from "react";
import css from "./PointsCounter.module.scss";
import { useNumbersCounter } from "../../hooks";

interface IPointsCounter {
  initialValue: number;
  endValue: number;
  seconds: number;
}

const PointsCounter: React.FC<IPointsCounter> = ({
  initialValue,
  endValue,
  seconds,
}) => {
  const numbers = useNumbersCounter(initialValue, 1, 1, endValue);

  return (
    <div className={css.container}>
      <div className={css.block}>
        <span>Очки: </span>
        <span>{numbers}</span>
      </div>
      <div className={css.block}>
        <span>Время: </span>
        <span>{seconds} c</span>
      </div>
    </div>
  );
};

export default PointsCounter;
