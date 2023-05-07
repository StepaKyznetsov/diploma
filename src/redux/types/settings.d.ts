type GameMode = "classic" | "blitz" | "infinity";
type QuestionsAmount = 10 | 20 | 30 | null;
type Time = 60 | 120 | 180 | null;

export interface SettingsState {
  gameMode: GameMode;
  questionsAmount: QuestionsAmount;
  time: Time;
}

export enum SettingsActionTypes {
  SET_GAME_MODE = "SET_GAME_MODE",
  SET_QUESTIONS_AMOUNT = "SET_QUESTIONS_AMOUNT",
  SET_TIME = "SET_TIME",
  RESET_SETTINGS = "RESET_SETTINGS",
}

interface SetGameMode {
  type: SettingsActionTypes.SET_GAME_MODE;
  payload: GameMode;
}

interface SetQuestionsAmount {
  type: SettingsActionTypes.SET_QUESTIONS_AMOUNT;
  payload: QuestionsAmount;
}

interface SetTime {
  type: SettingsActionTypes.SET_TIME;
  payload: Time;
}

interface ResetSettings {
  type: SettingsActionTypes.RESET_SETTINGS;
}

export type SettingsAction =
  | SetGameMode
  | SetQuestionsAmount
  | SetTime
  | ResetSettings;
