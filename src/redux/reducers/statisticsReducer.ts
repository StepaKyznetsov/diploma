import {
  StatisticsState,
  StatisticsActionTypes,
  StatisticsAction,
} from "../types/statistics.d";

const initialState: StatisticsState = {
  persons: [],
  groups: [],
  current: {
    correctlyAnswers: 0,
    wrongAnswers: 0,
  },
};

export const statisticsReducer = (
  state = initialState,
  action: StatisticsAction
): StatisticsState => {
  switch (action.type) {
    case StatisticsActionTypes.ADD_PERSON:
      return {
        ...state,
      //  persons: [...state.persons, action.payload],
      };

    
    case StatisticsActionTypes.RESET_CURRENT_STATISTICS:
      return {
        ...state,
        current: {
          correctlyAnswers: 0,
          wrongAnswers: 0,
        },
      };
    default:
      return state;
  }
};
