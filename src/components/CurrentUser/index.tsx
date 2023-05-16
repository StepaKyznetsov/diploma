import React from "react";
import css from "./CurrentUser.module.scss";
import { useActions, useTypedSelector } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../../constants";

const CurrentUser: React.FC = () => {
  const navigate = useNavigate();
  const { name, surname, type } = useTypedSelector((state) => state.user);
  const { resetUser } = useActions();

  const typeRu = type === "student" ? "ученик" : "учитель";
  const currentUser: boolean = !!name && !!surname;

  return (
    <div className={css.container}>
      <span>
        {currentUser
          ? `Пользователь: ${name} ${surname} (${typeRu})`
          : "Вы ещё не вошли в систему"}
      </span>
      {currentUser ? (
        <span className={css.quit} onClick={resetUser}>
          Выйти
        </span>
      ) : (
        <span className={css.login} onClick={() => navigate(LOGIN)}>
          Войти
        </span>
      )}
    </div>
  );
};

export default CurrentUser;
