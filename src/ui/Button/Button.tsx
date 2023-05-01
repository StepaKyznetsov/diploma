import React from 'react';
import css from './Button.module.scss';

interface IButton {
    text: string;
    onClickHandler?(): void;
}

const Button: React.FC<IButton> = ({text, onClickHandler}) => {
    return (
        <button onClick={onClickHandler} className={css.btn}>
            {text}
        </button>
    )
}

export default Button;