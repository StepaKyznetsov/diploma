import React from "react";
import css from "./MultipleAnswer.module.scss";
import { Question } from "../../redux/types/questions.d";

const MultipleAnswer: React.FC<Question> = ({
  text,
  answer,
  answerOptions,
}) => {
  return <div className={css.container}>{text}</div>;
};

export default MultipleAnswer;
