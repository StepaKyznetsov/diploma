import React, { useEffect } from "react";
import TaskContainer from "../../components/TaskContainer";
import { useTypedSelector } from "../../hooks";
import InGameInteractive from "../../ui/InGameInteractive";
import Timer from "../../components/Timer";
import BackArrow from "../../ui/BackArrow";
import SplashScreen from "../../components/SplashScreen";
import { useTasks } from "../../hooks";

const PlayGame: React.FC = () => {
  const { gameMode, time } = useTypedSelector((state) => state.settings);
  const {
    currentQuestionIndex,
    setCurrentQuestionIndex,
    currentQuestion,
    Component,
  } = useTasks();

  useEffect(() => {
    return () => setCurrentQuestionIndex(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <BackArrow />
      <SplashScreen text="Поиграем!" />
      <TaskContainer>
        <InGameInteractive
          text="Задание №"
          qNumber={currentQuestionIndex + 1}
          type="qCounter"
        />
        <Component
          text={currentQuestion.text}
          answer={currentQuestion.answer}
          answerOptions={currentQuestion.answerOptions}
          type={currentQuestion.type}
        />
        <InGameInteractive
          text="Далее"
          type="nextQ"
          onClickHandler={() => setCurrentQuestionIndex((prev) => prev + 1)}
        />
        {gameMode === "blitz" && Number.isInteger(time) && (
          <Timer time={time} onTimerEnd={() => console.log(1)} />
        )}
      </TaskContainer>
    </main>
  );
};

export default PlayGame;
