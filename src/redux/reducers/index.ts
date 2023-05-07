import { combineReducers } from "redux";
import { userAnswerReducer } from "./answerReducer";

export const rootReducer = combineReducers({
    userAnswerReducer
});

export type RootState = ReturnType<typeof rootReducer>;