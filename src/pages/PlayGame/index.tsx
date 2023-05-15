import React, { useEffect, useState } from "react";
import TaskContainer from "../../components/TaskContainer";
import { useTypedSelector } from "../../hooks";
import InGameInteractive from "../../ui/InGameInteractive";
import Timer from "../../components/Timer";
import BackArrow from "../../ui/BackArrow";
import SplashScreen from "../../components/SplashScreen";
import { useTasks } from "../../hooks";
import CharacterComment from "../../components/CharacterComment";

const PlayGame: React.FC = () => {
  const [visibleComment, setVisibleComment] = useState<boolean>(false);
  const { gameMode, time } = useTypedSelector((state) => state.settings);
  const {
    currentQuestionIndex,
    setCurrentQuestionIndex,
    currentQuestion,
    Component,
  } = useTasks();

  const checkAndGoNext = (): void => {
    setVisibleComment(true);
    setCurrentQuestionIndex((prev) => prev + 1);
    setTimeout(() => {
      setVisibleComment(false);
    }, 1000);
  };

  useEffect(() => {
    return () => setCurrentQuestionIndex(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <BackArrow />
      <CharacterComment visible={visibleComment} />
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
          onClickHandler={checkAndGoNext}
        />
        {gameMode === "blitz" && Number.isInteger(time) && (
          <Timer time={time} onTimerEnd={() => console.log(1)} />
        )}
      </TaskContainer>
    </main>
  );
};

export default PlayGame;
