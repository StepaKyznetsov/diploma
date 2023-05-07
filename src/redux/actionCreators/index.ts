import * as AnswerActionCreators from "./answer";
import * as QuestionsActionCreators from "./questions";
import * as SettingsActionCreators from "./settings";
import * as StatisticsActionCreators from "./statistics";

const actionCreators = {
  ...AnswerActionCreators,
  ...QuestionsActionCreators,
  ...SettingsActionCreators,
  ...StatisticsActionCreators
};

export default actionCreators;
