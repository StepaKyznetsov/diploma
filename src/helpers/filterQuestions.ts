import { Question, QuestionType } from "../redux/types/questions";

export const filterQuestions = (
  questions: Question[],
  filter: QuestionType,
): Question[] => {
  return questions.filter((e) => e.type === filter);
};
