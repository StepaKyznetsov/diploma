import React, { useState } from "react";
import css from "./VariantsOptions.module.scss";
import Modal from "../Modal";
import { useActions, useTypedSelector } from "../../hooks";
import { IoCreateOutline, IoCloseOutline } from "react-icons/io5";
import PopupCreate from "./PopupCreate";
import PopupEdit from "./PopupEdit";
import classNames from "classnames";

const VariantsOptions: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [addTask, setAddTask] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const { groups, currentGroup } = useTypedSelector((state) => state.groups);
  const { name, surname, type } = useTypedSelector((state) => state.user);
  const { deleteGroup, setCurrentGroup } = useActions();

  const personalGroups = groups.filter(
    (e) =>
      e.author.name === name &&
      e.author.surname === surname &&
      e.author.userType === type
  );

  return (
    <div className={css.container}>
      <h2 onClick={() => setModal(true)}>
        Создать новый вариант <IoCreateOutline />
      </h2>
      <div className={css.existingVariants}>
        <h3>
          {!personalGroups.length ? "Ваших вариантов нет" : "Мои варианты"}
        </h3>
        {personalGroups.map((e, index) => (
          <div key={index} className={css.variant}>
            <span>Название: {e.title}</span>
            <span>Количество заданий: {e.questions.length}</span>
            <div>
              <button
                onClick={() => {
                  setEditMode(true);
                  setModal(true);
                  setCurrentGroup(e.title);
                }}
              >
                Редактировать
              </button>
              <button onClick={() => deleteGroup(e.title)}>Удалить</button>
            </div>
          </div>
        ))}
        <Modal visible={modal} setVisible={setModal} small={!editMode}>
          <div
            className={classNames(
              { [css.createGroup]: !editMode },
              css.variantOptions
            )}
          >
            {editMode ? (
              <PopupEdit
                questions={
                  groups.find((e) => e.title === currentGroup)?.questions
                }
                addTask={addTask}
                setAddTask={setAddTask}
              />
            ) : (
              <PopupCreate setVisible={setModal} />
            )}
          </div>
          <IoCloseOutline
            className={css.close}
            onClick={() => {
              setModal(false);
              setEditMode(false);
            }}
          />
        </Modal>
      </div>
    </div>
  );
};

export default VariantsOptions;
