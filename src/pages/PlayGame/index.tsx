import React, { useEffect, useState } from "react";
import InGameInteractive from "../../ui/InGameInteractive";
import BackArrow from "../../ui/BackArrow";
import SplashScreen from "../../components/SplashScreen";
import { useActions, useTasks, useTimer, useTypedSelector } from "../../hooks";
import CharacterComment from "../../components/CharacterComment";
import CharacterLine from "../../components/CharacterLine";
import { findSlide } from "../../helpers";
import { useNavigate } from "react-router-dom";
import { GAME_OVER } from "../../constants";
import { DetailedStatistics } from "../../redux/types/statistics";
import ProgressBar from "../../components/ProgressBar";
import PointsCounter from "../../components/PointsCounter";

const PlayGame: React.FC = () => {
  const navigate = useNavigate();
  const [correctlyAnswers, setCorrectlyAnswers] = useState<number>(0);
  const [wrongAnswers, setWrongAnswers] = useState<number>(0);
  const [initialPoints, setInitialPoints] = useState<number>(0);
  const [endPoints, setEndPoints] = useState<number>(0);
  const [visibleComment, setVisibleComment] = useState<boolean>(false);
  const [details, setDetails] = useState<DetailedStatistics[]>([]);
  const { gameMode } = useTypedSelector((state) => state.settings);
  const { persons } = useTypedSelector((state) => state.statistics);
  const { questions } = useTypedSelector((state) => state.questions);
  const { currentAnswer } = useTypedSelector((state) => state.answer);
  const { name, surname, type } = useTypedSelector((state) => state.user);
  const { groups, currentGroup } = useTypedSelector((state) => state.groups);
  const { resetAnswer, addPersonalStatistics, addMemberToGroup } = useActions();
  const {
    isEnd,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    currentQuestion,
    Component,
  } = useTasks();
  const seconds = useTimer();
  const group = groups.filter((e) => e.title === currentGroup)[0];

  const slideInfo = findSlide(
    [
      0,
      Math.round(questions.length / 4),
      Math.round(questions.length / 2),
      Math.round(questions.length / 1.3),
    ],
    currentQuestionIndex
  );

  const checkAndGoNext = () => {
    setDetails([
      ...details,
      {
        questionIndex: currentQuestionIndex + 1,
        correctAnswer: currentAnswer === currentQuestion.answer,
      },
    ]);
    if (currentAnswer !== currentQuestion.answer) {
      setWrongAnswers((prev) => prev + 1);
      setInitialPoints(endPoints);
      setEndPoints(endPoints - 50);
      setVisibleComment(true);
      setTimeout(() => {
        setVisibleComment(false);
      }, 1);
    } else {
      setCorrectlyAnswers((prev) => prev + 1);
      setInitialPoints(endPoints);
      setEndPoints(endPoints + 100);
    }
    resetAnswer();
    if (
      trueCorrectlyAnswers >= pointsToWin ||
      trueWrongAnswers >= pointsToLose ||
      isEnd
    )
      return gameOver();
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const trueCorrectlyAnswers =
    currentAnswer !== currentQuestion.answer
      ? correctlyAnswers
      : correctlyAnswers + 1;

  const trueWrongAnswers =
    currentAnswer !== currentQuestion.answer ? wrongAnswers + 1 : wrongAnswers;

  const trueDetails = [
    ...details,
    {
      questionIndex: currentQuestionIndex + 1,
      correctAnswer: currentAnswer === currentQuestion.answer,
    },
  ];

  const trueEndPoints =
    currentAnswer !== currentQuestion.answer ? endPoints : endPoints + 100;

  const pointsToLose =
    (gameMode === "infinity" && group.pointsToLose) || questions.length;
  const pointsToWin =
    (gameMode === "infinity" && group.pointsToWin) || questions.length;

  const gameOver = () => {
    addPersonalStatistics(name, surname, type, {
      type: gameMode,
      groupName: currentGroup ? currentGroup : "",
      correctlyAnswers: trueCorrectlyAnswers,
      wrongAnswers: trueWrongAnswers,
      details: trueDetails,
      averageScores: (trueEndPoints / seconds / questions.length * 300).toFixed(2),
      result:
        trueCorrectlyAnswers >= pointsToWin
          ? "victory"
          : trueWrongAnswers >= pointsToLose
          ? "loss"
          : "draw",
    });

    const currentPerson = persons.find(
      (e) => e.name === name && e.surname === surname && e.userType === type
    );
    currentPerson && addMemberToGroup(currentGroup, currentPerson);
    setTimeout(() => {
      navigate(GAME_OVER);
    }, 2000);
  };

  useEffect(() => {
    return () => setCurrentQuestionIndex(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <BackArrow />
      <CharacterComment visible={visibleComment} />
      {slideInfo && (
        <CharacterLine
          imgSrc={slideInfo.slideImage}
          text={slideInfo.slideText}
          subtext={slideInfo.slideSubtext}
        />
      )}
      <SplashScreen text="Поиграем!" />
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
      <ProgressBar
        position={correctlyAnswers - wrongAnswers}
        questionsAmount={questions.length}
        pointsToLose={pointsToLose}
        pointsToWin={pointsToWin}
        isAnswerCorrect={
          details.find((e) => e.questionIndex === currentQuestionIndex)
            ?.correctAnswer || false
        }
        correctlyAnswers={correctlyAnswers}
        wrongAsnwers={wrongAnswers}
      />
      <PointsCounter
        initialValue={initialPoints}
        seconds={seconds}
        endValue={endPoints}
      />
    </main>
  );
};

export default PlayGame;
