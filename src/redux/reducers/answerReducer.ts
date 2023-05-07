import {
  AnswerState,
  AnswerActionTypes,
  AnswerAction,
} from "../types/userAnswer.d";

const initialState: AnswerState = {
  answer: [],
};

export const userAnswerReducer = (
  state = initialState,
  action: AnswerAction
): AnswerState => {
  switch (action.type) {
    case AnswerActionTypes.ADD_ANSWER:
      return {
        ...state,
        answer: [...state.answer, action.payload],
      };
    case AnswerActionTypes.RESET_ANSWER:
      return {
        ...state,
        answer: [],
      };
    default:
      return state;
  }
};
