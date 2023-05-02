import React, { useState } from "react";
import css from "./ClassicGame.module.scss";
import MenuItem from "../../ui/MenuItem/MenuItem";
import MenuList from "../../ui/MenuList/MenuList";

const ClassicGame: React.FC = () => {
  const [choose, setChoose] = useState<boolean>(false);
  const chi = () => {
    setChoose(!choose);
  };

  return (
    <div className={css.container}>
      {choose && <div className={css.nextQ}>Далее</div>}
      <div className={css.inner}>
        <div className={css.leftPanel}>
          <div className={css.board}>
            <h3>Вопрос 1</h3>
            <span>25 + 26 - 27 - 3 * 2 = ?</span>
          </div>
          <div className={css.asks}>
            <MenuList
              items={[
                {
                  text: "18",
                  isChoosen: choose,
                  onClickHandler: chi,
                },
                {
                  text: "20",
                },
              ]}
            />
            <MenuList
              items={[
                {
                  text: "22",
                },
                {
                  text: "24",
                },
              ]}
            />
          </div>
        </div>
        {/* 
        <div className={css.rightPanel}>
          <div className={css.questions}></div>
          <div className={css.nextQ}>
            <MenuItem text="Следующий вопрос" />
          </div>
        </div>
        */}
      </div>
    </div>
  );
};

export default ClassicGame;
