import {
  StatisticsState,
  StatisticsActionTypes,
  StatisticsAction,
} from "../types/statistics.d";

const initialState: StatisticsState = {
  persons: [],
  groups: [],
  current: {
    type: "classic",
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
        persons: [...state.persons, action.payload],
      };
    case StatisticsActionTypes.ADD_PERSONAL_STATISTICS:
      return {
        ...state,
        persons: state.persons.map((e) =>
          e.name === action.payload[0] &&
          e.surname === action.payload[1] &&
          e.userType === action.payload[2]
            ? {
                ...e,
                personalStatistics: [
                  ...e.personalStatistics,
                  action.payload[3],
                ],
              }
            : e
        ),
      };

    case StatisticsActionTypes.RESET_CURRENT_STATISTICS:
      return {
        ...state,
        current: {
          type: "classic",
          correctlyAnswers: 0,
          wrongAnswers: 0,
        },
      };
    default:
      return state;
  }
};
