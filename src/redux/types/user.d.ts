export type UserType = "student" | "teacher";

export interface UserState {
  name: string;
  surname: string;
  type: UserType;
}

export enum UserActionTypes {
  SET_USER = "SET_USER",
  RESET_USER = "RESET_USER",
}

interface SetUser {
  type: UserActionTypes.SET_USER;
  payload: [string, string, UserType];
}

interface ResetUser {
  type: UserActionTypes.RESET_USER;
}

export type UserAction = SetUser | ResetUser;
