import {
  GroupsState,
  GroupsActionTypes,
  GroupsAction,
} from "../types/groups.d";

const initialState: GroupsState = {
  groups: [],
  currentGroup: "",
  currentQuestion: "",
};

export const groupsReducer = (
  state = initialState,
  action: GroupsAction
): GroupsState => {
  switch (action.type) {
    case GroupsActionTypes.ADD_GROUP:
      return {
        ...state,
        groups: [...state.groups, action.payload],
      };
    case GroupsActionTypes.SET_CURRENT_GROUP:
      return {
        ...state,
        currentGroup: action.payload,
      };
    case GroupsActionTypes.SET_CURRENT_QUESTION:
      return {
        ...state,
        currentQuestion: action.payload,
      };
    case GroupsActionTypes.DELETE_GROUP:
      return {
        ...state,
        groups: state.groups.filter((e) => e.title !== action.payload),
      };
    case GroupsActionTypes.ADD_QUESTION_TO_GROUP:
      const { groupTitle, question } = action.payload;
      return {
        ...state,
        groups: state.groups.map((e) =>
          e.title === groupTitle
            ? {
                ...e,
                questions: [...e.questions, question],
              }
            : e
        ),
      };
    case GroupsActionTypes.ADD_MEMBER_TO_GROUP:
      const { groupTitle: group, member } = action.payload;
      return {
        ...state,
        groups: state.groups.map((e) =>
          e.title === group
            ? {
                ...e,
                members: [...e.members, member],
              }
            : e
        ),
      };
    case GroupsActionTypes.DELETE_QUESTION_FROM_GROUP:
      const { groupTitle: title, questionText } = action.payload;
      return {
        ...state,
        groups: state.groups.map((e) =>
          e.title === title
            ? {
                ...e,
                questions: e.questions.filter((e) => e.text !== questionText),
              }
            : e
        ),
      };
    default:
      return state;
  }
};
