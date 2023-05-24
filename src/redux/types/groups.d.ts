import { Question } from "./questions";
import { Person } from "./statistics";

export interface Group {
  author: Person;
  title: string;
  questions: Question[];
  members: Person[];
}

export interface GroupsState {
  groups: Group[];
  currentGroup: string;
  currentQuestion: string;
}

export enum GroupsActionTypes {
  ADD_GROUP = "ADD_GROUP",
  DELETE_GROUP = "DELETE_GROUP",
  SET_CURRENT_GROUP = "SET_CURRENT_GROUP",
  SET_CURRENT_QUESTION = "SET_CURRENT_QUESTION",
  CHANGE_QUESTION = "CHANGE_QUESTION",
  ADD_MEMBER_TO_GROUP = "ADD_MEMBER_TO_GROUP",
  ADD_QUESTION_TO_GROUP = "ADD_QUESTION_TO_GROUP",
  DELETE_QUESTION_FROM_GROUP = "DELETE_QUESTION_FROM_GROUP",
}

interface AddGroup {
  type: GroupsActionTypes.ADD_GROUP;
  payload: Group;
}

interface DeleteGroup {
  type: GroupsActionTypes.DELETE_GROUP;
  payload: string;
}

interface SetCurrentGroup {
  type: GroupsActionTypes.SET_CURRENT_GROUP;
  payload: string;
}

interface SetCurrentQuestion {
  type: GroupsActionTypes.SET_CURRENT_QUESTION;
  payload: string;
}

interface ChangeQuestion {
  type: GroupsActionTypes.CHANGE_QUESTION;
  payload: Question;
}

interface AddMemberToGroup {
  type: GroupsActionTypes.ADD_MEMBER_TO_GROUP;
  payload: { groupTitle: string; member: Person };
}

interface AddQuestionToGroup {
  type: GroupsActionTypes.ADD_QUESTION_TO_GROUP;
  payload: { groupTitle: string; question: Question };
}

interface DeleteQuestionFromGroup {
  type: GroupsActionTypes.DELETE_QUESTION_FROM_GROUP;
  payload: { groupTitle: string; questionText: string };
}

export type GroupsAction =
  | AddGroup
  | DeleteGroup
  | SetCurrentGroup
  | SetCurrentQuestion
  | ChangeQuestion
  | AddMemberToGroup
  | AddQuestionToGroup
  | DeleteQuestionFromGroup;
