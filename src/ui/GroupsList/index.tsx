import React from "react";
import css from "./GroupsList.module.scss";
import { useActions, useTypedSelector } from "../../hooks";
import classNames from "classnames";

interface IGroupList {
  group: string;
}

const GroupsList: React.FC<IGroupList> = ({ group }) => {
  const { groups, currentGroup } = useTypedSelector((state) => state.groups);
  const { setCurrentGroup } = useActions();

  const searchGroups = groups.filter((e) =>
    e.title.toLowerCase().includes(group.toLowerCase())
  );

  const toggleGroup = (groupTitle: string) => {
    if (currentGroup === groupTitle) setCurrentGroup("");
    else setCurrentGroup(groupTitle);
  };

  return (
    <div className={classNames(css.up, css.container)}>
      <h4>Найденные варианты</h4>
      <ul>
        {group &&
          searchGroups.map((e, index) => (
            <li
              className={classNames({
                [css.active]: e.title === currentGroup,
              })}
              key={index}
              onClick={() => toggleGroup(e.title)}
            >
              {e.title}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default GroupsList;
