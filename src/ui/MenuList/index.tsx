import React from "react";
import css from "./MenuList.module.scss";
import { IMenuItem } from "../../interfaces/Controls";
import MenuItem from "../Controls/MenuItem";

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
          href={e.href}
        />
      ))}
    </div>
  );
};

export default MenuList;
