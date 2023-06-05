import React from "react";
import css from "./Input.module.scss";

interface IInput {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  placeholder: string;
  type?: 'text' | 'number'
}

const Input: React.FC<IInput> = ({ onChange, value, placeholder, type='text' }) => {
  return (
    <div className={css.container}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
