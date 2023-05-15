import { UserAction, UserActionTypes, UserType } from "./../types/user.d";
import { Dispatch } from "redux";

export const setUser = (name: string, surname: string, type: UserType, group: string) => {
  return (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: UserActionTypes.SET_USER,
      payload: [name, surname, type, group],
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
