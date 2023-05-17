import React, { useEffect, useState } from "react";
import TaskContainer from "../../components/TaskContainer";
import InGameInteractive from "../../ui/InGameInteractive";
import Timer from "../../components/Timer";
import BackArrow from "../../ui/BackArrow";
import SplashScreen from "../../components/SplashScreen";
import { useActions, useTasks, useTypedSelector } from "../../hooks";
import CharacterComment from "../../components/CharacterComment";
import CharacterLine from "../../components/CharacterLine";
import { findSlide } from "../../helpers";
import { useNavigate } from "react-router-dom";
import { GAME_OVER } from "../../constants";

const PlayGame: React.FC = () => {
  const navigate = useNavigate();
  const [correctlyAnswers, setCorrectlyAnswers] = useState<number>(0);
  const [wrongAnswers, setWrongAnswers] = useState<number>(0);
  const [visibleComment, setVisibleComment] = useState<boolean>(false);
  const { gameMode, time } = useTypedSelector((state) => state.settings);
  const { currentAnswer } = useTypedSelector((state) => state.answer);
  const { name, surname, type } = useTypedSelector((state) => state.user);
  const { resetAnswer, addPersonalStatistics } = useActions();
  const {
    isEnd,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    currentQuestion,
    Component,
  } = useTasks();

  const slideInfo = findSlide([0, 3, 6, 9, 15], currentQuestionIndex);

  const gameOver = () => {
    addPersonalStatistics(name, surname, type, {
      type: gameMode,
      correctlyAnswers,
      wrongAnswers,
    });
    navigate(GAME_OVER);
  };

  const checkAndGoNext = (): void => {
    if (currentAnswer !== currentQuestion.answer) {
      setWrongAnswers((prev) => prev + 1);
      setVisibleComment(true);
      setTimeout(() => {
        setVisibleComment(false);
      }, 1000);
    } else setCorrectlyAnswers((prev) => prev + 1);
    resetAnswer();
    if (isEnd) return gameOver();
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  useEffect(() => {
    return () => setCurrentQuestionIndex(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <BackArrow />
      <CharacterComment visible={visibleComment} />
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
