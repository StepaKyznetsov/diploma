export interface AnswerState {
  answer: string[];
}

export enum AnswerActionTypes {
  ADD_ANSWER = "ADD_ANSWER",
  RESET_ANSWER = "RESET_ANSWER",
}

interface AddAnswer {
  type: AnswerActionTypes.ADD_ANSWER;
  payload: string;
}

interface ResetAnswer {
  type: AnswerActionTypes.RESET_ANSWER;
}

export type AnswerAction = AddAnswer | ResetAnswer;
