import React, { useState } from "react";
import css from "./WinLosePoints.module.scss";
import Input from "../../ui/Input";
import { useActions, useTypedSelector } from "../../hooks";

const WinLosePoints: React.FC = () => {
  const { setPointsToWin, setPointsToLose } = useActions();
  const { groups, currentGroup } = useTypedSelector((state) => state.groups);
  const group = groups.find((e) => e.title === currentGroup);
  const [victoryPoints, setVictoryPoints] = useState<string>(
    String(group?.pointsToWin)
  );
  const [lossPoints, setLossPoints] = useState<string>(
    String(group?.pointsToLose)
  );

  const victoryPointsHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setVictoryPoints(e.target.value);
  };

  const lossPointsHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setLossPoints(e.target.value);
  };

  const setPoints = (): void => {
    setPointsToWin(currentGroup, +victoryPoints);
    setPointsToLose(currentGroup, +lossPoints);
  };

  return (
    <div className={css.container}>
      <div className={css.inputs}>
        <Input
          value={victoryPoints}
          onChange={victoryPointsHandler}
          placeholder="Кол-во очков для победы"
          type={"number"}
        />
        <Input
          value={lossPoints}
          onChange={lossPointsHandler}
          placeholder="Кол-во очков для проигрыша"
          type={"number"}
        />
      </div>
      {(String(group?.pointsToWin) !== victoryPoints ||
        String(group?.pointsToLose) !== lossPoints) && (
        <button onClick={setPoints}>Сохранить</button>
      )}
    </div>
  );
};

export default WinLosePoints;
