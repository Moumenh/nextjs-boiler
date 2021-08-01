import { combineReducers } from "redux";

import userReducer, { UserState } from "./User/userReducer";
// import languageReducer from "./Language/languageReducer";

export interface ApplicationState {
  user: UserState;
}

export default combineReducers<ApplicationState>({
  user: userReducer,
  //   language: languageReducer,
});
