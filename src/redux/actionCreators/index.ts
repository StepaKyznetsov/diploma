import * as AnswerActionCreators from "./answer";
import * as QuestionsActionCreators from "./questions";
import * as SettingsActionCreators from "./settings";
import * as StatisticsActionCreators from "./statistics";
import * as UserActionCreators from "./user";


const actionCreators = {
  ...AnswerActionCreators,
  ...QuestionsActionCreators,
  ...SettingsActionCreators,
  ...StatisticsActionCreators,
  ...UserActionCreators
};

export default actionCreators;
