import { combineReducers } from "redux";

import userReducer, { UserState } from "./User/userReducer";
import languageReducer, { LanguageState } from "./Language/languageReducer";

export interface ApplicationState {
  user: UserState;
  language: LanguageState;
}

export default combineReducers<ApplicationState>({
  user: userReducer,
  language: languageReducer,
});
