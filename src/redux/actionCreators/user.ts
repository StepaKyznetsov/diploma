import { UserAction, UserActionTypes, UserType } from "./../types/user.d";
import { Dispatch } from "redux";

export const setUser = (name: string, surname: string, type: UserType) => {
  return (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: UserActionTypes.SET_USER,
      payload: [name, surname, type],
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
