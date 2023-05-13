import React from "react";
import css from "./CurrentUser.module.scss";
import { useActions, useTypedSelector } from "../../hooks";

const CurrentUser: React.FC = () => {
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
      {currentUser && (
        <span className={css.quit} onClick={resetUser}>
          Выйти
        </span>
      )}
    </div>
  );
};

export default CurrentUser;
