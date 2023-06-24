import {
  SettingsState,
  SettingsActionTypes,
  SettingsAction,
} from "../types/settings.d";

const initialState: SettingsState = {
  gameMode: "infinity",
  questionsAmount: null,
  time: null,
};

export const settingsReducer = (
  state = initialState,
  action: SettingsAction
): SettingsState => {
  switch (action.type) {
    case SettingsActionTypes.SET_GAME_MODE:
      return {
        ...state,
        gameMode: action.payload,
      };
    case SettingsActionTypes.SET_QUESTIONS_AMOUNT:
      return {
        ...state,
        questionsAmount: action.payload,
      };
    case SettingsActionTypes.SET_TIME:
      return {
        ...state,
        time: action.payload,
      };
    case SettingsActionTypes.RESET_SETTINGS:
      return {
        ...state,
        gameMode: "classic",
        questionsAmount: null,
        time: null,
      };
    default:
      return state;
  }
};
