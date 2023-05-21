import * as AnswerActionCreators from "./answer";
import * as QuestionsActionCreators from "./questions";
import * as SettingsActionCreators from "./settings";
import * as StatisticsActionCreators from "./statistics";
import * as UserActionCreators from "./user";
import * as GroupsActionCreators from "./groups";

const actionCreators = {
  ...AnswerActionCreators,
  ...QuestionsActionCreators,
  ...SettingsActionCreators,
  ...StatisticsActionCreators,
  ...UserActionCreators,
  ...GroupsActionCreators,
};

export default actionCreators;
