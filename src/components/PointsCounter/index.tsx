import React from "react";
import css from "./PointsCounter.module.scss";
import { useNumbersCounter } from "../../hooks";

interface IPointsCounter {
  initialValue: number;
  endValue: number;
}

const PointsCounter: React.FC<IPointsCounter> = ({
  initialValue,
  endValue,
}) => {
  const numbers = useNumbersCounter(initialValue, 1, 1, endValue);

  return (
    <div className={css.container}>
      <span>Очки: {numbers}</span>
    </div>
  );
};

export default PointsCounter;
