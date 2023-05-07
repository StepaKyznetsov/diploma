export type QuestionType = "single" | "multiple" | "input" | "voice";

export interface Question {
  text: string;
  answer: string;
  type: QuestionType;
}

export interface QuestionsState {
  questions: Question[];
}

export enum QuestionsActionTypes {
  SET_QUESTIONS = "SET_QUESTIONS",
  RESET_QUESTIONS = "RESET_QUESTIONS",
}

interface SetQuestions {
  type: QuestionsActionTypes.SET_QUESTIONS;
  payload: Question[];
}

interface ResetQuestions {
  type: QuestionsActionTypes.RESET_QUESTIONS;
}

export type QuestionsAction = SetQuestions | ResetQuestions;
