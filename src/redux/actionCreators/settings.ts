import {
  GameMode,
  QuestionsAmount,
  Time,
  SettingsAction,
  SettingsActionTypes,
} from "./../types/settings.d";
import { Dispatch } from "redux";

export const setCurrentGameMode = (mode: GameMode) => {
  return (dispatch: Dispatch<SettingsAction>) => {
    dispatch({
      type: SettingsActionTypes.SET_GAME_MODE,
      payload: mode,
    });
  };
};

export const setCurrentQuestionsAmount = (amount: QuestionsAmount) => {
  return (dispatch: Dispatch<SettingsAction>) => {
    dispatch({
      type: SettingsActionTypes.SET_QUESTIONS_AMOUNT,
      payload: amount,
    });
  };
};

export const setCurrentTime = (time: Time) => {
  return (dispatch: Dispatch<SettingsAction>) => {
    dispatch({
      type: SettingsActionTypes.SET_TIME,
      payload: time,
    });
  };
};

export const resetSettings = () => {
  return (dispatch: Dispatch<SettingsAction>) => {
    dispatch({
      type: SettingsActionTypes.RESET_SETTINGS,
    });
  };
};
