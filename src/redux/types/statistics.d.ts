import { GameMode } from "./settings";
import { UserType } from "./user";

interface Person {
  name: string;
  surname: string;
  userType: UserType;
  personalStatistics: SimpleStatistics[];
  groups: string[];
}

interface SimpleStatistics {
  type: GameMode;
  groupName?: string; 
  correctlyAnswers: number;
  wrongAnswers: number;
}

export interface StatisticsState {
  persons: Person[];
  current: SimpleStatistics;
}

export enum StatisticsActionTypes {
  ADD_PERSON = "ADD_PERSON",
  ADD_PERSONAL_STATISTICS = "ADD_PERSONAL_STATISTICS",
  ADD_CORRECTLY_POINTS = "ADD_CORRECTLY_POINTS",
  ADD_WRONG_POINTS = "ADD_WRONG_POINTS",
  RESET_CURRENT_STATISTICS = "RESET_CURRENT_STATISTICS",
}

interface AddPerson {
  type: StatisticsActionTypes.ADD_PERSON;
  payload: Person;
}

interface AddPersonalStatistics {
  type: StatisticsActionTypes.ADD_PERSONAL_STATISTICS;
  payload: {
    name: string;
    surname: string;
    userType: UserType;
    statistics: SimpleStatistics;
  };
}

interface AddCorrectlyPoints {
  type: StatisticsActionTypes.ADD_CORRECTLY_POINTS;
  payload: number;
}

interface AddWrongPoints {
  type: StatisticsActionTypes.ADD_WRONG_POINTS;
  payload: number;
}

interface ResetCurrentStatistics {
  type: StatisticsActionTypes.RESET_CURRENT_STATISTICS;
}

export type StatisticsAction =
  | AddPerson
  | AddPersonalStatistics
  | AddCorrectlyPoints
  | AddWrongPoints
  | ResetCurrentStatistics;
