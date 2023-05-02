import React from "react";
import css from "./MenuList.module.scss";
import { IMenuItem } from "../../interfaces/MenuItem";
import MenuItem from "../MenuItem/MenuItem";

interface IMenuList {
  items: IMenuItem[];
}

const MenuList: React.FC<IMenuList> = ({ items }) => {
  return (
    <div className={css.container}>
      {items.map((e, index) => (
        <MenuItem
          key={index}
          description={e.description}
          icon={e.icon}
          text={e.text}
        />
      ))}
    </div>
  );
};

export default MenuList;
