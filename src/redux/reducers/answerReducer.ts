import {
  AnswerState,
  AnswerActionTypes,
  AnswerAction,
} from "../types/answer.d";

const initialState: AnswerState = {
  currentAnswer: "",
};

export const answerReducer = (
  state = initialState,
  action: AnswerAction
): AnswerState => {
  switch (action.type) {
    case AnswerActionTypes.ADD_ANSWER:
      return {
        ...state,
        currentAnswer: action.payload,
      };
    case AnswerActionTypes.RESET_ANSWER:
      return {
        ...state,
        currentAnswer: "",
      };
    default:
      return state;
  }
};
