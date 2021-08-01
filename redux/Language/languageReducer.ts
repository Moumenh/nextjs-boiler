import { LangActionsTypes } from "./languageTypes";
import { ScreenArabic, ScreenEnglish } from "./languageUtils";
import { setLanguageAction } from "./languageActions";

export interface LanguageState {
  ScreenLanguage: object;
}

const INITAIL_STATE: LanguageState = {
  ScreenLanguage: ScreenEnglish,
};

type Action = setLanguageAction;

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
