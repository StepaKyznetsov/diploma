import React, { useState } from "react";
import css from "./VariantsOptions.module.scss";
import Modal from "../Modal";
import { useActions, useTypedSelector } from "../../hooks";
import { IoCreateOutline, IoCloseOutline } from "react-icons/io5";
import PopupCreate from "./PopupCreate";
import PopupEdit from "./PopupEdit";
import classNames from "classnames";
import PopupStatistics from "./PopupStatistics";

const VariantsOptions: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [showStatistics, setShowStatistics] = useState<boolean>(false);
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
          {!personalGroups.length ? "Ваших вариантов пока нет" : "Мои варианты"}
        </h3>
        {personalGroups.map((e, index) => (
          <div
            key={index}
            className={css.variant}
            onClick={() => setCurrentGroup(e.title)}
          >
            <span>Название: {e.title}</span>
            <div>
              <button
                onClick={() => {
                  setEditMode(true);
                  setShowStatistics(true);
                  setModal(true);
                }}
              >
                Статистика
              </button>
              <button
                onClick={() => {
                  setEditMode(true);
                  setModal(true);
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
            {showStatistics ? (
              <PopupStatistics />
            ) : editMode ? (
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
              setShowStatistics(false);
              setEditMode(false);
            }}
          />
        </Modal>
      </div>
    </div>
  );
};

export default VariantsOptions;
