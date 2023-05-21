import { combineReducers } from "redux";
import { answerReducer } from "./answerReducer";
import { questionsReducer } from "./questionsReducer";
import { settingsReducer } from "./settingsReducer";
import { statisticsReducer } from "./statisticsReducer";
import { userReducer } from "./userReducer";
import { groupsReducer } from "./groupsReducer";

export const rootReducer = combineReducers({
  answer: answerReducer,
  questions: questionsReducer,
  settings: settingsReducer,
  statistics: statisticsReducer,
  user: userReducer,
  groups: groupsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
