import React from "react";
import css from "./InputAnswer.module.scss";
import Input from "../../ui/Input";
import { Question } from "../../redux/types/questions.d";
import { useActions, useTypedSelector, useDebounce } from "../../hooks";

const InputAnswer: React.FC<Question> = ({ text }) => {
  const { setCurrentAnswer } = useActions();
  const { currentAnswer } = useTypedSelector((state) => state.answer);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCurrentAnswer(e.target.value);
  };

  return (
    <div className={css.container}>
      <div className={css.inner}>
        <div className={css.leftPanel}>
          <div className={css.description}>Введите ответ в поле ввода</div>
          <div className={css.board}>
            <span>{text}</span>
          </div>
          <div className={css.asks}>
            <Input
              value={currentAnswer}
              placeholder="Ваш ответ"
              onChange={handleInput}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputAnswer;
