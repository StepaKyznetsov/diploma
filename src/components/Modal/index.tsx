import React, { ReactNode } from "react";
import css from "./Modal.module.scss";
import classNames from "classnames";

interface IModal {
  children: ReactNode;
  visible: boolean;
  small: boolean;
  setVisible(state: boolean): void;
}

const Modal: React.FC<IModal> = ({ children, visible, setVisible, small }) => {
  return (
    <div
      className={classNames(
        { [css.active]: visible, [css.small]: small },
        css.modal
      )}
      onClick={() => setVisible(false)}
    >
      <div className={css.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
