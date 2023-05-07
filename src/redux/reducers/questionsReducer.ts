import {
  QuestionsState,
  QuestionsActionTypes,
  QuestionsAction,
} from "../types/questions.d";

const initialState: QuestionsState = {
  questions: [],
};

export const questionsReducer = (
  state = initialState,
  action: QuestionsAction
): QuestionsState => {
  switch (action.type) {
    case QuestionsActionTypes.SET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
      };
    case QuestionsActionTypes.RESET_QUESTIONS:
      return {
        ...state,
        questions: [],
      };
    default:
      return state;
  }
};
