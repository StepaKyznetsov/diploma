import React, { useState } from "react";
import css from "./AddTask.module.scss";
import Input from "../../ui/Input";

const AddTask = () => {
  const [taskText, setTaskText] = useState<string>("");

  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTaskText(e.target.value);
  };

  return (
    <div className={css.container}>
      <div className={css.taskBlock}>
        <span>Текст задания: </span>
        <Input
          placeholder="Текст задания"
          value={taskText}
          onChange={handleText}
        />
      </div>
      <div className={css.taskBlock}>
        <span>Тип задания: </span>
        <form>
          <div className="radio">
            <label>
              <input type="radio" value="option2" />
              Выбор ответа
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" value="option3" />
              Ввод ответа
            </label>
          </div>
        </form>
      </div>
      <div className={css.taskBlock}>
        <span>Правильный ответ: </span>
        <Input
          placeholder="Введите верный ответ"
          value={taskText}
          onChange={handleText}
        />
      </div>
      <div className={css.taskBlock}>
        <span>Варианты ответов(опционально): </span>
        <Input
          placeholder="Введите варианты ответов через пробел"
          value={taskText}
          onChange={handleText}
        />
      </div>
    </div>
  );
};

export default AddTask;
