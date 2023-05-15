import { Question } from "./questions";

export interface Group {
  name: string;
  questions: Question[];
}

export interface GroupsState {
  groups: Group[];
  currentGroup: Group;
}

export enum GroupsActionTypes {
  ADD_GROUP = "ADD_GROUP",
  ADD_QUESTION_TO_GROUP = "ADD_QUESTION_TO_GROUP",
  SET_CURRENT_GROUP = "SET_CURRENT_GROUP",
}

interface AddGroup {
  type: GroupsActionTypes.ADD_GROUP;
  payload: Group;
}

interface AddQuestionToGroup {
  type: GroupsActionTypes.ADD_QUESTION_TO_GROUP;
  payload: Question;
}

interface SetCurrentGroup {
  type: GroupsActionTypes.SET_CURRENT_GROUP;
  payload: Group;
}

export type GroupsAction = AddGroup | AddQuestionToGroup | SetCurrentGroup;
