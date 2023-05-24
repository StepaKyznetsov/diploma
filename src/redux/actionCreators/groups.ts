import { Question } from "../types/questions";
import { Person } from "../types/statistics";
import { GroupsAction, GroupsActionTypes } from "./../types/groups.d";
import { Dispatch } from "redux";

export const addGroup = (author: Person, title: string) => {
  return (dispatch: Dispatch<GroupsAction>) => {
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
