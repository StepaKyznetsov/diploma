import React, { useEffect, useState } from "react";
import TaskContainer from "../../components/TaskContainer";
import InGameInteractive from "../../ui/InGameInteractive";
import Timer from "../../components/Timer";
import BackArrow from "../../ui/BackArrow";
import SplashScreen from "../../components/SplashScreen";
import { useTasks, useTypedSelector } from "../../hooks";
import CharacterComment from "../../components/CharacterComment";
import CharacterLine from "../../components/CharacterLine";
import { findSlide } from "../../helpers";
import { useNavigate } from "react-router-dom";
import { GAME_OVER } from "../../constants";

const PlayGame: React.FC = () => {
  const navigate = useNavigate();
  const [visibleComment, setVisibleComment] = useState<boolean>(false);
  const { gameMode, time } = useTypedSelector((state) => state.settings);
  const {
    isEnd,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    currentQuestion,
    Component,
  } = useTasks();

  const slideInfo = findSlide([0, 3, 6, 9, 15], currentQuestionIndex);

  const checkAndGoNext = (): void => {
    if (isEnd) return navigate(GAME_OVER)
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
      <CharacterComment
        visible={visibleComment}
      />
      {gameMode === "classic" && slideInfo && (
        <CharacterLine
          imgSrc={slideInfo.slideImage}
          text={slideInfo.slideText}
        />
      )}
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
