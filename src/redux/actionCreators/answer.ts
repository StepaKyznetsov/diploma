import { AnswerAction, AnswerActionTypes } from "./../types/answer.d";
import { Dispatch } from "redux";

export const setCurrentAnswer = (answer: string) => {
  return (dispatch: Dispatch<AnswerAction>) => {
    dispatch({
      type: AnswerActionTypes.ADD_ANSWER,
      payload: answer,
    });
  };
};
