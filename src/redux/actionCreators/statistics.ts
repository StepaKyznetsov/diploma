import { UserType } from "../types/user";
import {
  Person,
  SimpleStatistics,
  StatisticsAction,
  StatisticsActionTypes,
} from "./../types/statistics.d";
import { Dispatch } from "redux";

export const addPerson = (person: Person) => {
  return (dispatch: Dispatch<StatisticsAction>) => {
    dispatch({
      type: StatisticsActionTypes.ADD_PERSON,
      payload: person,
    });
  };
};

export const addPersonalStatistics = (
  name: string,
  surname: string,
  userType: UserType,
  statistics: SimpleStatistics
) => {
  return (dispatch: Dispatch<StatisticsAction>) => {
    dispatch({
      type: StatisticsActionTypes.ADD_PERSONAL_STATISTICS,
      payload: [name, surname, userType, statistics],
    });
  };
};
