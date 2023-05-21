import {
  StatisticsState,
  StatisticsActionTypes,
  StatisticsAction,
} from "../types/statistics.d";

const initialState: StatisticsState = {
  persons: [],
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
      const { name, surname, userType, statistics } = action.payload;
      return {
        ...state,
        persons: state.persons.map((e) =>
          e.name === name && e.surname === surname && e.userType === userType
            ? {
                ...e,
                personalStatistics: [...e.personalStatistics, statistics],
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
