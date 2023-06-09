import React, { useState } from "react";
import css from "./LoginForm.module.scss";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import { useActions, useTypedSelector } from "../../hooks";
import { UserType } from "../../redux/types/user";
import { useNavigate } from "react-router-dom";
import { MAIN } from "../../constants";

const LoginForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [type, setType] = useState<UserType>("student");
  const { setUser, addPerson } = useActions();
  const { persons } = useTypedSelector((state) => state.statistics);
  const navigate = useNavigate();

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSurname = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSurname(e.target.value);
  };

  const setCurrentType = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const value = e.target.value;
    (value === "student" || value === "teacher") && setType(value);
  };

  const login = () => {
    setUser(name, surname, type);
    navigate(MAIN);
    if (
      !persons.filter(
        (e) => e.name === name && e.surname === surname && e.userType === type
      ).length
    )
      addPerson({
        name,
        surname,
        userType: type,
        personalStatistics: [],
        groups: [],
      });
  };

  return (
    <div className={css.container}>
      <h1>Введите данные для входа</h1>
      <form className={css.inner}>
        <Input
          value={name}
          onChange={handleName}
          placeholder="Введите ваше имя"
        />
        <Input
          value={surname}
          onChange={handleSurname}
          placeholder="Введите вашу фамилию"
        />
        <Select onChange={setCurrentType} value={type} />
        <button onClick={login}>Вход</button>
      </form>
    </div>
  );
};

export default LoginForm;
