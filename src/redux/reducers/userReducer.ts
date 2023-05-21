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
      const { name, surname, userType } = action.payload;
      return {
        ...state,
        name,
        surname,
        type: userType,
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
