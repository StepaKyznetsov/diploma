import React, { useEffect, useState } from "react";
import TaskContainer from "../../components/TaskContainer";
import SingleAnswer from "../../components/SingleAnswer";
import MultipleAnswer from "../../components/MultipleAnswer";
import InputAnswer from "../../components/InputAnswer";
import { useTypedSelector } from "../../hooks";
import InGameInteractive from "../../ui/InGameInteractive";
import Timer from "../../components/Timer";
import BackArrow from "../../ui/BackArrow";

const PlayGame: React.FC = () => {
  const { questions } = useTypedSelector((state) => state.questions);
  const { gameMode, time } = useTypedSelector((state) => state.settings);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const differentAnswersTypes = {
    single: SingleAnswer,
    multiple: MultipleAnswer,
    input: InputAnswer,
  };

  const currentQuestion = questions[currentQuestionIndex];
  const Component = differentAnswersTypes[currentQuestion.type];

  useEffect(() => {
    return(() => setCurrentQuestionIndex(0))
  }, [])

  return (
    <main>
      <BackArrow />
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
          onClickHandler={() => setCurrentQuestionIndex(prev => prev + 1)}
        />
        {gameMode === "blitz" && Number.isInteger(time) && (
          <Timer time={time} onTimerEnd={() => console.log(1)} />
        )}
      </TaskContainer>
    </main>
  );
};

export default PlayGame;
