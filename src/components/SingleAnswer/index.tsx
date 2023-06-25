import React from "react";
import css from "./SingleAnswer.module.scss";
import { Question } from "../../redux/types/questions.d";
import AnswerItem from "../../ui/Controls/AnswerItem";

const SingleAnswer: React.FC<Question> = ({ text, answerOptions }) => {
  return (
    <div className={css.container}>
      <div className={css.inner}>
        <div className={css.leftPanel}>
          <div className={css.board}>
            <p>{text}</p>
          </div>
          <div className={css.asks}>
            <AnswerItem text={answerOptions[0]} />
            <AnswerItem text={answerOptions[1]} />
            <AnswerItem text={answerOptions[2]} />
            <AnswerItem text={answerOptions[3]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAnswer;
