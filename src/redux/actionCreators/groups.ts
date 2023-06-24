import { Question } from "../types/questions";
import { Person } from "../types/statistics";
import { Group, GroupsAction, GroupsActionTypes } from "./../types/groups.d";
import { Dispatch } from "redux";

export const addGroup = (author: Person, title: string, groups: Group[]) => {
  return (dispatch: Dispatch<GroupsAction>) => {
    if (groups.filter((e) => e.title === title).length) return;
    dispatch({
      type: GroupsActionTypes.ADD_GROUP,
      payload: {
        author,
        title,
        questions: [],
        members: [],
      },
    });
  };
};

export const setCurrentGroup = (groupTitle: string) => {
  return (dispatch: Dispatch<GroupsAction>) => {
    dispatch({
      type: GroupsActionTypes.SET_CURRENT_GROUP,
      payload: groupTitle,
    });
  };
};

export const setCurrentQuestion = (questionText: string) => {
  return (dispatch: Dispatch<GroupsAction>) => {
    dispatch({
      type: GroupsActionTypes.SET_CURRENT_QUESTION,
      payload: questionText,
    });
  };
};

export const setPointsToWin = (groupTitle: string, pointsToWin: number) => {
  return (dispatch: Dispatch<GroupsAction>) => {
    dispatch({
      type: GroupsActionTypes.SET_POINTS_TO_WIN,
      payload: { groupTitle, pointsToWin },
    });
  };
};

export const setPointsToLose = (groupTitle: string, pointsToLose: number) => {
  return (dispatch: Dispatch<GroupsAction>) => {
    dispatch({
      type: GroupsActionTypes.SET_POINTS_TO_LOSE,
      payload: { groupTitle, pointsToLose },
    });
  };
};

export const deleteGroup = (groupTitle: string) => {
  return (dispatch: Dispatch<GroupsAction>) => {
    dispatch({
      type: GroupsActionTypes.DELETE_GROUP,
      payload: groupTitle,
    });
  };
};

export const addQuestionToGroup = (groupTitle: string, question: Question) => {
  return (dispatch: Dispatch<GroupsAction>) => {
    dispatch({
      type: GroupsActionTypes.ADD_QUESTION_TO_GROUP,
      payload: { groupTitle, question },
    });
  };
};

export const addMemberToGroup = (groupTitle: string, member: Person) => {
  return (dispatch: Dispatch<GroupsAction>) => {
    dispatch({
      type: GroupsActionTypes.ADD_MEMBER_TO_GROUP,
      payload: { groupTitle, member },
    });
  };
};

export const deleteQuestionFromGroup = (
  groupTitle: string,
  questionText: string
) => {
  return (dispatch: Dispatch<GroupsAction>) => {
    dispatch({
      type: GroupsActionTypes.DELETE_QUESTION_FROM_GROUP,
      payload: { groupTitle, questionText },
    });
  };
};
