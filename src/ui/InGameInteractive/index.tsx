import React from "react";
import css from "./InGameInteractive.module.scss";
import classNames from "classnames";

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
  return (
    <div
      className={classNames({ [css.nextQ]: type === "nextQ" }, css.container)}
    >
      <span onClick={onClickHandler}>
        {type === "qCounter" ? `${text} ${qNumber}` : "Далее"}
      </span>
    </div>
  );
};

export default InGameInteractive;
