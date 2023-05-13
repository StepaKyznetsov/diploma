import React from "react";
import css from "./Input.module.scss";

interface IInput {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
}

const Input: React.FC<IInput> = ({ onChange, value, placeholder }) => {
  return (
    <div className={css.container}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
