import React from "react";
import css from "./SingleAnswer.module.scss";
import { Question } from "@/redux/types/questions.d";

const SingleAnswer: React.FC<Question> = ({ text, answer, answerOptions }) => {
  return (
    <div className={css.container}>
      <div className={css.nextQ}>Далее</div>
      <div className={css.inner}>
        <div className={css.leftPanel}>
          <div className={css.board}>
            <h3>Вопрос 1</h3>
            <span>25 + 26 - 27 - 3 * 2 = ?</span>
          </div>
          <div className={css.asks}></div>
        </div>
        {/* 
        <div className={css.rightPanel}>
          <div className={css.questions}></div>
          <div className={css.nextQ}>
            <MenuItem text="Следующий вопрос" />
          </div>
        </div>
        */}
      </div>
    </div>
  );
};

export default SingleAnswer;
