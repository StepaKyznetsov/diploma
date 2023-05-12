import React, { useEffect, useState } from "react";
import css from "./CharacterLine.module.scss";
import classNames from "classnames";
import { AiOutlineClose } from "react-icons/ai";
import { useTypewriter } from "../../hooks/useTypewriter";

interface ICharacterLine {
  imgSrc: string;
  text: string;
}

const CharacterLine: React.FC<ICharacterLine> = ({ imgSrc, text }) => {
  const [open, setOpen] = useState<boolean>(false);
  const {displayText} = useTypewriter(text)

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 4000);
  }, []);

  if (!open) return null;

  return (
    <div
      className={classNames(
        { [css.up]: open, [css.down]: !open },
        css.container
      )}
    >
      <div className={css.inner}>
        <img src={imgSrc} alt="hero" />
        <p>{displayText}</p>
        <AiOutlineClose
          className={css.close}
          onClick={() => {
            setOpen(false);
          }}
        />
      </div>
    </div>
  );
};

export default CharacterLine;
