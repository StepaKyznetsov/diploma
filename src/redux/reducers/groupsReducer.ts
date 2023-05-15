import {
  GroupsState,
  GroupsActionTypes,
  GroupsAction,
} from "../types/groups.d";

const initialState: GroupsState = {
  groups: [],
  currentGroup: {
    name: "5В класс",
    questions: [],
  },
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
    case GroupsActionTypes.ADD_QUESTION_TO_GROUP:
      return {
        ...state,
        currentGroup: {
          ...state.currentGroup,
          questions: [...state.currentGroup.questions, action.payload],
        },
      };
    case GroupsActionTypes.SET_CURRENT_GROUP:
      return {
        ...state,
        currentGroup: action.payload,
      };

    default:
      return state;
  }
};
