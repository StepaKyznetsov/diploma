import React from "react";
import css from "./Controls.module.scss";
import { IMenuItem } from "../../interfaces/Controls";
import classNames from "classnames";
import { useActions, useTypedSelector } from "../../hooks";

const AnswerItem: React.FC<IMenuItem> = ({ text }) => {
  const { currentAnswer } = useTypedSelector((state) => state.answer);
  const { setCurrentAnswer } = useActions();

  return (
    <div
      onClick={() => setCurrentAnswer(text)}
      className={classNames(
        { [css.choosen]: text === currentAnswer },
        css.container
      )}
    >
      <span>{text}</span>
    </div>
  );
};

export default AnswerItem;
