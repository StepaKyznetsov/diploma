import React from "react";
import css from "./MenuList.module.scss";
import { IMenuItem } from "../../interfaces/MenuItem";
import MenuItem from "../MenuItem/MenuItem";

interface IMenuList {
  items: IMenuItem[];
  multipleAnswers?: boolean;
}

const MenuList: React.FC<IMenuList> = ({ items, multipleAnswers = false }) => {
  return (
    <div className={css.container}>
      {items.map((e, index) => (
        <MenuItem
          key={index}
          description={e.description}
          onClickHandler={e.onClickHandler}
          icon={e.icon}
          text={e.text}
          type={e.type}
          href={e.href}
        />
      ))}
    </div>
  );
};

export default MenuList;
