import { UserState, UserActionTypes, UserAction } from "../types/user.d";

const initialState: UserState = {
  name: "",
  surname: "",
  type: "student",
};

export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.SET_USER:
      return {
        ...state,
        name: action.payload[0],
        surname: action.payload[1],
        type: action.payload[2],
      };
    case UserActionTypes.RESET_USER:
      return {
        ...state,
        name: "",
        surname: "",
        type: "student",
      };
    default:
      return state;
  }
};
