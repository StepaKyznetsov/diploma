import React from "react";
import css from "./VariantsOptions.module.scss";
import AddTask from "../AddTask";
import { Question } from "../../redux/types/questions";
import { useActions, useTypedSelector } from "../../hooks";
import WinLosePoints from "../WinLosePoints";

interface IPopupEdit {
  questions?: Question[];
  addTask: boolean;
  setAddTask: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopupEdit: React.FC<IPopupEdit> = ({
  questions,
  addTask,
  setAddTask,
}) => {
  const { deleteQuestionFromGroup, setCurrentQuestion } = useActions();
  const { currentGroup } = useTypedSelector((state) => state.groups);

  return (
    <>
      <div className={css.metaOptions}>
        <div>
          <h3>Редактирование заданий</h3>
          <button
            onClick={() => {
              setCurrentQuestion("");
              setAddTask(!addTask);
            }}
          >
            {addTask ? "Отмена" : "Добавить задание"}
          </button>
        </div>
        <div>
          <h3>Количество очков для победы/проигрыша</h3>
          <WinLosePoints />
        </div>
      </div>
      {addTask && <AddTask setAddTask={setAddTask} />}
      {!addTask && (
        <div className={css.currentTasks}>
          <h3>
            {questions?.length ? "Добавленные задания" : "Заданий пока нет"}{" "}
          </h3>
          {questions && (
            <ol>
              {questions.map((e, index) => (
                <li key={index}>
                  <span>Текст задания: {e.text}</span>
                  <span>Верный ответ: {e.answer}</span>
                  <button
                    onClick={() => {
                      setCurrentQuestion(e.text);
                      setAddTask(!addTask);
                    }}
                  >
                    Редактировать
                  </button>
                  <button
                    onClick={() =>
                      deleteQuestionFromGroup(currentGroup, e.text)
                    }
                  >
                    Удалить
                  </button>
                </li>
              ))}
            </ol>
          )}
        </div>
      )}
    </>
  );
};

export default PopupEdit;
