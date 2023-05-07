import { combineReducers } from "redux";
import { answerReducer } from "./answerReducer";
import { questionsReducer } from "./questionsReducer";
import { settingsReducer } from "./settingsReducer";
import { statisticsReducer } from "./statisticsReducer";

export const rootReducer = combineReducers({
  answer: answerReducer,
  questions: questionsReducer,
  settings: settingsReducer,
  statistics: statisticsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
