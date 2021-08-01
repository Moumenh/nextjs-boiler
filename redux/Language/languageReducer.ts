import { LangActionsTypes } from "./languageTypes";
import { ScreenArabic, ScreenEnglish } from "./languageUtils";
import {
  setArabicLanguageAction,
  setEnglishLanguageAction,
} from "./languageActions";

export interface LanguageState {
  ScreenLanguage: object;
}

const INITAIL_STATE: LanguageState = {
  ScreenLanguage: ScreenEnglish,
};

type Action = setEnglishLanguageAction | setArabicLanguageAction;

const langugaeReducer = (
  state = INITAIL_STATE,
  action: Action
): LanguageState => {
  switch (action.type) {
    case LangActionsTypes.SET_ENGLISH:
      return {
        ...state,
        ScreenLanguage: ScreenEnglish,
      };
    case LangActionsTypes.SET_ARABIC:
      return {
        ...state,
        ScreenLanguage: ScreenArabic,
      };
    default:
      return state;
  }
};
export default langugaeReducer;
