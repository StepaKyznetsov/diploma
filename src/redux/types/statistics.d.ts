interface Person {
  name: string;
  surname: string;
  personalStatistics: SimpleStatistics[];
  groups: string[];
}

interface Group {
  name: string;
  members: Person[];
}

interface SimpleStatistics {
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
  type: AnswerActionTypes.ADD_PERSON;
  payload: Person;
}

interface AddGroup {
  type: AnswerActionTypes.ADD_GROUP;
  payload: Group;
}

interface AddPersonalStatistics {
  type: AnswerActionTypes.ADD_PERSONAL_STATISTICS;
  payload: SimpleStatistics;
}

interface AddCorrectlyPoints {
  type: AnswerActionTypes.ADD_CORRECTLY_POINTS;
  payload: number;
}

interface AddWrongPoints {
  type: AnswerActionTypes.ADD_WRONG_POINTS;
  payload: number;
}

interface ResetCurrentStatistics {
  type: AnswerActionTypes.RESET_CURRENT_STATISTICS;
}

export type StatisticsAction =
  | AddPerson
  | AddGroup
  | AddPersonalStatistics
  | AddCorrectlyPoints
  | AddWrongPoints
  | ResetCurrentStatistics;
