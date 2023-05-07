import { Question, QuestionType } from "../redux/types/questions";

export function generateQuestion(type: QuestionType): Question {
  let questionText: string = "";
  let answer: string = "";

  switch (type) {
    case "single":
      const num1 = Math.floor(Math.random() * 10) + 1;
      const num2 = Math.floor(Math.random() * 10) + 1;
      questionText = `${num1} + ${num2} = ?`;
      answer = (num1 + num2).toString();
      break;
    case "input":
      const num6 = Math.floor(Math.random() * 10) + 1;
      const num7 = Math.floor(Math.random() * 10) + 1;
      questionText = `What is the product of ${num6} and ${num7}?`;
      answer = (num6 * num7).toString();
      break;
  }

  return { text: questionText, answer, type };
}
