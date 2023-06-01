import React from "react";
import css from "./ProgressBar.module.scss";

interface IProgressBar {
  position: number;
  questionsAmount: number;
  pointsToWin: number;
  pointsToLose: number;
  correctlyAnswers: number;
  wrongAsnwers: number;
  isAnswerCorrect: boolean;
}

const ProgressBar: React.FC<IProgressBar> = ({
  position,
  questionsAmount,
  pointsToLose,
  pointsToWin,
  correctlyAnswers,
  wrongAsnwers,
  isAnswerCorrect
}) => {
  const leftShift = (45 - (50 / pointsToLose * wrongAsnwers)) + '%';
  const rightShift = (50 / pointsToWin * correctlyAnswers + 45) + '%';  

  return (
    <div className={css.container}>
      <div className={css.inner}>
        <div className={css.stepsLeft}></div>
        <div className={css.stepsRight}></div>
        <div className={css.lose}>
          <img src="/images/enemy1.png" alt="gameOver" />
        </div>
        <div className={css.win}>
          <img src="/images/finish.png" alt="finish" />
        </div>
        <div className={css.hero} style={{ left: isAnswerCorrect ? rightShift : leftShift }}>
          <img src="/images/character3.png" alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
