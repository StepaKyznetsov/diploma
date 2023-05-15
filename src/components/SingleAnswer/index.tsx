import React from "react";
import css from "./SingleAnswer.module.scss";
import { Question } from "../../redux/types/questions.d";
import MenuList from "../../ui/MenuList";

const SingleAnswer: React.FC<Question> = ({ text, answer, answerOptions }) => {

  return (
    <div className={css.container}>
      <div className={css.inner}>
        <div className={css.leftPanel}>
          <div className={css.board}>
            <span>{text}</span>
          </div>
          <div className={css.asks}>
            <MenuList 
              items={[
                {
                  text: answerOptions[0],
                },
                {
                  text: answerOptions[1],
                },
              ]}
            />
            <MenuList 
              items={[
                {
                  text: answerOptions[2],
                },
                {
                  text: answerOptions[3],
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAnswer;
