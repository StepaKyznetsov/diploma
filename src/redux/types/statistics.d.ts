import { GameMode } from "./settings";
import { UserType } from "./user";

interface Person {
  name: string;
  surname: string;
  userType: UserType;
  personalStatistics: SimpleStatistics[];
  groups: string[];
}

interface Group {
  name: string;
  members: Person[];
}

interface SimpleStatistics {
  type: GameMode;
  correctlyAnswers: number;
  wrongAnswers: number;
}

export interface StatisticsState {
  persons: Person[];
  groups: Group[];
  current: SimpleStatistics;
}

export enum StatisticsActionTypes {
  ADD_PERSON = "ADD_PERSON",
  ADD_PERSONAL_STATISTICS = "ADD_PERSONAL_STATISTICS",
  ADD_GROUP = "ADD_GROUP",
  ADD_CORRECTLY_POINTS = "ADD_CORRECTLY_POINTS",
  ADD_WRONG_POINTS = "ADD_WRONG_POINTS",
  RESET_CURRENT_STATISTICS = "RESET_CURRENT_STATISTICS",
}

interface AddPerson {
  type: StatisticsActionTypes.ADD_PERSON;
  payload: Person;
}

interface AddGroup {
  type: StatisticsActionTypes.ADD_GROUP;
  payload: Group;
}

interface AddPersonalStatistics {
  type: StatisticsActionTypes.ADD_PERSONAL_STATISTICS;
  payload: [string, string, UserType, SimpleStatistics];
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
  | AddGroup
  | AddPersonalStatistics
  | AddCorrectlyPoints
  | AddWrongPoints
  | ResetCurrentStatistics;
