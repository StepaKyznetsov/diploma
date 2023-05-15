import React, { useState } from "react";
import css from "./VariantsOptions.module.scss";
import { IoCreateOutline, IoCloseOutline } from "react-icons/io5";
import Modal from "../Modal";
import Input from "../../ui/Input";
import AddTask from "../AddTask";

const VariantsOptions: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [addTask, setAddTask] = useState<boolean>(false);
  const [varName, setVarName] = useState<string>("");

  const variants = [
    { name: "5В класс", tasksCount: "10" },
    { name: "5Б класс", tasksCount: "2" },
    { name: "5Г класс", tasksCount: "5" },
    { name: "5Д класс", tasksCount: "3" },
    { name: "6В класс", tasksCount: "12" },
  ];

  const tasks = [
    { text: "2 + 2 - 2 = ?", correctAnswer: "2" },
    { text: "2 + 2 - 2 = ?", correctAnswer: "2" },
    { text: "2 + 2 - 2 = ?", correctAnswer: "2" },
    { text: "2 + 2 - 2 = ?", correctAnswer: "2" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setVarName(e.target.value);
  };

  return (
    <div className={css.container}>
      <h2 onClick={() => setModal(true)}>
        Создать новый вариант <IoCreateOutline />
      </h2>
      <div className={css.existingVariants}>
        <h3>Мои варианты</h3>
        {variants.map((e, index) => (
          <div key={index} className={css.variant}>
            <span>Название: {e.name}</span>
            <span>Количество заданий: {e.tasksCount}</span>
            <div>
              <button>Редактировать</button>
              <button>Удалить</button>
            </div>
          </div>
        ))}
        <Modal visible={modal} setVisible={setModal}>
          <div className={css.variantOptions}>
            <div className={css.variantName}>
              <h3>Укажите название варианта</h3>
              <Input
                placeholder="Введите название варианта"
                value={varName}
                onChange={handleChange}
              />
            </div>
            <div>
              <h3>Редактирование заданий</h3>
              <button onClick={() => setAddTask(!addTask)}>
                {addTask ? "Отмена" : "Добавить задание"}
              </button>
              {addTask && (
                <button onClick={() => console.log(1)}>Сохранить</button>
              )}
            </div>
            {addTask && <AddTask />}
            {!addTask && (
              <div className={css.currentTasks}>
                <h3>Добавленные задания</h3>
                <ol>
                  {tasks.map((e, index) => (
                    <li key={index}>
                      <span>Текст задания: {e.text}</span>
                      <span>Верный ответ: {e.correctAnswer}</span>
                      <button>Редактировать</button>
                      <button>Удалить</button>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
          <IoCloseOutline
            className={css.close}
            onClick={() => setModal(false)}
          />
        </Modal>
      </div>
    </div>
  );
};

export default VariantsOptions;
