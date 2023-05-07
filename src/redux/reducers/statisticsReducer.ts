import {
  StatisticsState,
  StatisticsActionTypes,
  StatisticsAction,
} from "../types/statistics.d";

const initialState: StatisticsState = {
  persons: [],
};

export const statisticsReducer = (
  state = initialState,
  action: StatisticsAction
): StatisticsState => {
  switch (action.type) {
    case StatisticsActionTypes.ADD_PERSON:
      return {
        ...state,
        persons: [...state.persons, action.payload],
      };
    default:
      return state;
  }
};
