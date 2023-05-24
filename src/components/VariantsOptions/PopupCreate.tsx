import React, { useState } from "react";
import css from "./VariantsOptions.module.scss";
import Input from "../../ui/Input";
import { useTypedSelector, useActions } from "../../hooks";

interface IPopupCreate {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopupCreate: React.FC<IPopupCreate> = ({ setVisible }) => {
  const [groupName, setGroupName] = useState<string>("");
  const { name, surname, type } = useTypedSelector((state) => state.user);
  const { addGroup } = useActions();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setGroupName(e.target.value);
  };

  return (
    <div className={css.variantName}>
      <h3>Укажите название варианта</h3>
      <Input
        placeholder="Введите название варианта"
        value={groupName}
        onChange={handleChange}
      />
      <button
        onClick={() => {
          if (!groupName) return;
          setGroupName("");
          addGroup(
            {
              name,
              surname,
              userType: type,
              personalStatistics: [],
              groups: [],
            },
            groupName
          );
          setVisible(false);
        }}
      >
        Создать
      </button>
    </div>
  );
};

export default PopupCreate;
