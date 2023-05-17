import { useState } from "react";
import SingleAnswer from "../components/SingleAnswer";
import MultipleAnswer from "../components/MultipleAnswer";
import InputAnswer from "../components/InputAnswer";
import { useTypedSelector } from ".";

export const useTasks = () => {
  const { questions } = useTypedSelector((state) => state.questions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const differentAnswersTypes = {
    single: SingleAnswer,
    multiple: MultipleAnswer,
    input: InputAnswer,
  };
  const currentQuestion = questions[currentQuestionIndex];
  const Component = differentAnswersTypes[currentQuestion.type];
  const isEnd = currentQuestionIndex === questions.length - 1;

  return {
    isEnd,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    currentQuestion,
    Component,
  };
};
