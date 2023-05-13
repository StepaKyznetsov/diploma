import React, { useState } from "react";
import css from "./InputAnswer.module.scss";
import Input from "../../ui/Input";
import { Question } from "../../redux/types/questions.d";

const InputAnswer: React.FC<Question> = ({ text, answer, answerOptions }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  return (
    <div className={css.container}>
      <Input
        value={inputValue}
        placeholder="Ваш ответ"
        onChange={handleInput}
      />
      {text}
    </div>
  );
};

export default InputAnswer;
