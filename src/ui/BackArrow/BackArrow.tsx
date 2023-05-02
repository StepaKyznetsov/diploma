import React from "react";
import css from "./BackArrow.module.scss";
import {IoArrowBackOutline} from 'react-icons/io5'
import { useNavigate } from "react-router-dom";

const BackArrow: React.FC = () => {

  const navigate = useNavigate();

  return (
    <div className={css.container} onClick={() => navigate('/')}>
      <IoArrowBackOutline className={css.icon} />
      <span>Назад</span>
    </div>
  );
};

export default BackArrow;
