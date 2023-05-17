import React from "react";
import css from "./Menu.module.scss";
import SettingsContainer from "../../ui/SettingsContainer";
import MenuList from "../../ui/MenuList";
import {
  BsFillPlayFill,
  BsClipboard2Fill,
  BsFillPeopleFill,
} from "react-icons/bs";
import { GiTeacher } from "react-icons/gi";
import { FaTasks } from "react-icons/fa";

const Menu: React.FC = () => {
  return (
    <SettingsContainer>
      <div className={css.inner}>
        <div className={css.title}>
          <h1>Название игры</h1>
        </div>
        <MenuList
          items={[
            {
              text: "Играть",
              icon: <BsFillPlayFill />,
              description: "Опробуйте свои знания в одном из режимов игры!",
              href: "/gamemode",
              redirectToLogin: true,
            },
            {
              text: "Учителю",
              icon: <GiTeacher />,
              description:
                "Создайте свои собственные задания для вашего класса",
              href: "/teacherroom",
              redirectToLogin: true,
            },
          ]}
        />
        <MenuList
          items={[
            {
              text: "Таблица",
              icon: <BsClipboard2Fill />,
              description: "Таблица результатов выполненных работ",
            },
            {
              text: "Моя статистика",
              icon: <FaTasks />,
              description: "Статистика решенных заданий по всем режимам",
              href: "/mystatistics",
            },
            {
              text: "Авторы",
              icon: <BsFillPeopleFill />,
              description: "Пара слов об авторах приложения",
            },
          ]}
        />
      </div>
      <div className={css.characterRight}>
        <img src="/images/character1.png" alt="character" />
      </div>
      <div className={css.characterLeft}>
        <img src="/images/character3.png" alt="character" />
      </div>
    </SettingsContainer>
  );
};

export default Menu;
