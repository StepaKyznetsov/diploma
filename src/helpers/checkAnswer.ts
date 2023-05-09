import { Question } from "../redux/types/questions.d";

export const checkAnswer = (
  questions: Question[],
  answer: string,
  index: number
): boolean => {
  return questions[index].answer === answer;
};
