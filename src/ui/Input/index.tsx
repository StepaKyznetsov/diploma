import React from "react";
import css from "./Input.module.scss";

interface IInput {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Input: React.FC<IInput> = ({ onChange, value }) => {
  return (
    <div className={css.container}>
      <input
        type="text"
        placeholder="Ваш ответ"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
