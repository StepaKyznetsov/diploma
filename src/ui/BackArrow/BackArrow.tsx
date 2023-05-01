import React from "react";
import css from "./BackArrow.module.scss";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const BackArrow: React.FC = () => {
  return (
    <div className={css.container} onClick={() => console.log(1)}>
      <MdOutlineArrowBackIosNew className={css.icon} />
      <span>Назад</span>
    </div>
  );
};

export default BackArrow;
