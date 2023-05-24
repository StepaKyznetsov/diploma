import React from "react";
import css from "./VariantsOptions.module.scss";
import { useTypedSelector } from "../../hooks";

const PopupStatistics: React.FC = () => {
  const { currentGroup } = useTypedSelector((state) => state.groups);
  const { persons } = useTypedSelector((state) => state.statistics);

  const myMembers = persons.filter(
    (e) =>
      e.personalStatistics.filter(
        (el) => el.groupName === currentGroup
      ).length
  );
  console.log(myMembers);
  return (
    <div className={css.groupStatistics}>
      <h3>Вариант: {currentGroup}</h3>
      <div className={css.members}>
        {!myMembers?.length ? (
          <span>Ученики еще не решали данный вариант</span>
        ) : (
          myMembers.map((e, index) => (
            <div key={index} className={css.soloMember}>
              <span>
                {index + 1}. {e.name} {e.surname}
              </span>
              {e.personalStatistics
                .filter((e) => e.groupName === currentGroup && e.type === 'infinity')
                .map((e, index) => (
                  <div key={index} className={css.completeTasks}>
                    Решенные задания:
                    {e.details.map((e, index) => (
                      <span
                        key={index}
                        className={
                          e.correctAnswer ? css.correctAnswer : css.wrongAnswer
                        }
                      >
                        {e.questionIndex}
                      </span>
                    ))}
                  </div>
                ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PopupStatistics;
