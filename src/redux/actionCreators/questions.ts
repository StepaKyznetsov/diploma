import {
  Question,
  QuestionsAction,
  QuestionsActionTypes,
} from "./../types/questions.d";
import { Dispatch } from "redux";

export const setCurrentQuestions = (questions: Question[], num: number | null) => {
  return (dispatch: Dispatch<QuestionsAction>) => {
    dispatch({
      type: QuestionsActionTypes.SET_QUESTIONS,
      payload: questions,
    });
  };
};
