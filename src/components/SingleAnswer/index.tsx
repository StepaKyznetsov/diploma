import React from "react";
import css from "./SingleAnswer.module.scss";
import { Question } from "../../redux/types/questions.d";

const SingleAnswer: React.FC<Question> = ({ text, answer, answerOptions }) => {
  return (
    <div className={css.container}>
      <div className={css.nextQ}>Далее</div>
      <div className={css.inner}>
        <div className={css.leftPanel}>
          <div className={css.board}>
            <h3>Вопрос 1</h3>
            <span>{text}</span>
          </div>
          <div className={css.asks}></div>
        </div>
      </div>
    </div>
  );
};

export default SingleAnswer;
