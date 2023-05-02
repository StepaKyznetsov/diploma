import React from "react";
import css from "./BackArrow.module.scss";
import {IoArrowBackOutline} from 'react-icons/io5'

const BackArrow: React.FC = () => {
  return (
    <div className={css.container} onClick={() => console.log(1)}>
      <IoArrowBackOutline className={css.icon} />
      <span>Назад</span>
    </div>
  );
};

export default BackArrow;
