import { UserAction, UserActionTypes, UserType } from "./../types/user.d";
import { Dispatch } from "redux";

export const setUser = (name: string, surname: string, userType: UserType) => {
  return (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: UserActionTypes.SET_USER,
      payload: { name, surname, userType },
    });
  };
};

export const resetUser = () => {
  return (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: UserActionTypes.RESET_USER,
    });
  };
};
