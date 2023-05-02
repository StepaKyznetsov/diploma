import React from "react";
import css from "./Menu.module.scss";
import SettingsContainer from "../../ui/SettingsContainer/SettingsContainer";
import MenuList from "../../ui/MenuList/MenuList";
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
          <h2>Название игры</h2>
        </div>
        <MenuList
          items={[
            {
              text: "Играть",
              icon: <BsFillPlayFill />,
              description: "Опробуйте свои знания в одном из режимов игры!",
            },
            {
              text: "Учителю",
              icon: <GiTeacher />,
              description:
                "Создайте свои собственные задания для вашего класса",
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
              text: "Банк заданий",
              icon: <FaTasks />,
              description: "Общий банк со всеми заданиями",
            },
            {
              text: "Авторы",
              icon: <BsFillPeopleFill />,
              description: "Пара слов об авторах приложения",
            },
          ]}
        />
      </div>
    </SettingsContainer>
  );
};

export default Menu;
