import React, { useState } from "react";
import css from "./AddTask.module.scss";
import Input from "../../ui/Input";
import { useActions, useTypedSelector } from "../../hooks";
import { QuestionType } from "../../redux/types/questions.d";

interface IAddTask {
  setAddTask: React.Dispatch<React.SetStateAction<boolean>>;
  questionIndex?: number;
}

const AddTask: React.FC<IAddTask> = ({ setAddTask, questionIndex }) => {
  const [text, setText] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const [type, setType] = useState<QuestionType>("single");
  const [answerOptions, setAnswerOptions] = useState<string>("");
  const { currentGroup } = useTypedSelector((state) => state.groups);
  const { addQuestionToGroup } = useActions();

  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setText(e.target.value);
  };

  const handleAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setAnswer(e.target.value);
  };

  const handleAnswerOptions = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setAnswerOptions(e.target.value);
  };

  const radioHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setType(e.target.value as QuestionType);
  };

  return (
    <div className={css.container}>
      <div className={css.taskBlock}>
        <span>Текст задания: </span>
        <Input placeholder="Текст задания" value={text} onChange={handleText} />
      </div>
      <div className={css.taskBlock}>
        <span>Тип задания: </span>
        <label>
          <input
            type="radio"
            value="single"
            name="questionType"
            onChange={radioHandler}
          />
          Выбор ответа
        </label>
        <label>
          <input
            type="radio"
            value="input"
            name="questionType"
            onChange={radioHandler}
          />
          Ввод ответа
        </label>
      </div>
      <div className={css.taskBlock}>
        <span>Правильный ответ: </span>
        <Input
          placeholder="Введите верный ответ"
          value={answer}
          onChange={handleAnswer}
        />
      </div>
      <div className={css.taskBlock}>
        <span>Варианты ответов(опционально): </span>
        <Input
          placeholder="Введите варианты ответов через пробел (максимум 4)"
          value={answerOptions}
          onChange={handleAnswerOptions}
        />
      </div>
      {text && answer && type && (
        <button
          onClick={() => {
            setAddTask(false);
            addQuestionToGroup(currentGroup, {
              text,
              answer,
              answerOptions: answerOptions.trim().split(" ").slice(0, 4),
              type,
            });
          }}
        >
          Добавить задание
        </button>
      )}
    </div>
  );
};

export default AddTask;