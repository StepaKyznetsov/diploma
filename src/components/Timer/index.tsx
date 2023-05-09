import React, { useState, useEffect } from "react";
import css from "./Timer.module.scss";

interface ITimer {
  time: number | null;
  onTimerEnd: () => void;
}

const Timer: React.FC<ITimer> = ({ time, onTimerEnd }) => {
  const [currentTime, setCurrentTime] = useState(time);

  useEffect(() => {
    const timer = setTimeout(() => {
      currentTime && setCurrentTime(currentTime - 1);
    }, 1000);

    if (currentTime === 0) {
      onTimerEnd();
      clearTimeout(timer);
    }

    return () => clearTimeout(timer);
  }, [currentTime, onTimerEnd]);

  if (!currentTime) return null;
  
  const minutes = Math.floor(currentTime / 60);
  const seconds = currentTime % 60;

  return (
    <div className={css.container}>
      <span>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </span>
    </div>
  );
};

export default Timer;
