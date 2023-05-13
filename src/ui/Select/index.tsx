import React from "react";
import css from "./Select.module.scss";
import { UserType } from "../../redux/types/user";

interface ISelect {
  value: UserType;
  onChange(e: React.ChangeEvent<HTMLSelectElement>): void;
}

const Select: React.FC<ISelect> = ({ value, onChange }) => {
  return (
    <select onChange={onChange} value={value}>
      <option value="student">Ученик</option>
      <option value="teacher">Учитель</option>
    </select>
  );
};

export default Select;
