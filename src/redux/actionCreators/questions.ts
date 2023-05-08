import { getRandomElements } from "../../helpers/getRandomElements";
import {
  Question,
  QuestionsAction,
  QuestionsActionTypes,
} from "./../types/questions.d";
import { Dispatch } from "redux";

export const setCurrentQuestions = (arr: Question[], num: number | null) => {
  const currentQuestions = getRandomElements(arr, num);
  return (dispatch: Dispatch<QuestionsAction>) => {
    dispatch({
      type: QuestionsActionTypes.SET_QUESTIONS,
      payload: currentQuestions,
    });
  };
};
