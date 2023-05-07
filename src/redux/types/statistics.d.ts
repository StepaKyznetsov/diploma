interface Person {
  name: string;
  surname: string;
  group: string;
}

export interface StatisticsState {
  persons: Person[];
}

export enum StatisticsActionTypes {
  ADD_PERSON = "ADD_PERSON",
}

interface AddAnswer {
  type: AnswerActionTypes.ADD_PERSON;
  payload: Person;
}

export type StatisticsAction = ADD_PERSON;
