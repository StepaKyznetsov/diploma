import React, { useEffect, useState } from "react";
import css from "./CharacterLine.module.scss";
import classNames from "classnames";
import { AiOutlineClose } from "react-icons/ai";
import { useTypewriter } from "../../hooks";
import { toast } from "react-toastify";

interface ICharacterLine {
  imgSrc: string;
  text: string;
  subtext?: string;
}

const CharacterLine: React.FC<ICharacterLine> = ({ imgSrc, text, subtext }) => {
  const [open, setOpen] = useState<boolean>(true);
  const [visibleClose, setVisibleClose] = useState<boolean>(false);
  const { displayText } = useTypewriter(text);

  const notifyEnemyFirst = () =>
    toast("..П-п-привет, я.. я Неуверенность в себе", {
      icon: () => (
        <img
          src="/images/enemy3.png"
          height={30}
          width={30}
          alt="characterIcon"
        />
      ),
    });
  const notifyEnemySecond = () =>
    toast("Фух, чуть опять не опоздал! Я Безотвтственность!", {
      icon: () => (
        <img
          src="/images/enemy2.png"
          height={30}
          width={30}
          alt="characterIcon"
        />
      ),
    });
  const notifyEnemyThird = () =>
    toast("Если честно, мне Лень даже представляться", {
      icon: () => (
        <img
          src="/images/enemy1.png"
          height={30}
          width={30}
          alt="characterIcon"
        />
      ),
    });

  const showEnemies = () => {
    if (imgSrc === "/images/character1.png") {
      notifyEnemyFirst();
      notifyEnemySecond();
      notifyEnemyThird();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setVisibleClose(true);
    }, 1000);
  }, []);

  return (
    <div
      className={classNames(
        { [css.up]: open, [css.down]: !open },
        css.container
      )}
    >
      <div className={css.inner}>
        <img src={imgSrc} alt="hero" />
        <div className={css.text}>
          <p>{displayText}</p>
          <p className={css.subtext}>{subtext}</p>
        </div>
        <AiOutlineClose
          className={classNames(
            { [css.visibleClose]: visibleClose },
            css.close
          )}
          onClick={() => {
            showEnemies();
            setOpen(false);
          }}
        />
      </div>
    </div>
  );
};

export default CharacterLine;
