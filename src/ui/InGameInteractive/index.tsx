import React from "react";
import css from "./InGameInteractive.module.scss";
import classNames from "classnames";
import { useTypedSelector } from "../../hooks";

type TInteractive = "qCounter" | "nextQ";

interface IInGameInteractive {
  text: string;
  qNumber?: number;
  type: TInteractive;
  onClickHandler?(): void;
}

const InGameInteractive: React.FC<IInGameInteractive> = ({
  text,
  qNumber,
  type,
  onClickHandler,
}) => {
  const { currentAnswer } = useTypedSelector((state) => state.answer);

  return (
    <div
      className={classNames({ [css.nextQ]: type === "nextQ" }, css.container)}
    >
      <span
        onClick={onClickHandler}
        className={classNames({
          [css.disabled]: type === "nextQ" && !currentAnswer,
        })}
      >
        {type === "qCounter" ? `${text} ${qNumber}` : "Ответить"}
      </span>
    </div>
  );
};

export default InGameInteractive;
