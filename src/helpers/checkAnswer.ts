import { Question } from "../redux/types/questions";

export const checkAnswer = (
  questions: Question[],
  answer: string,
  index: number
): boolean => {
  return questions[index].answer === answer;
};
