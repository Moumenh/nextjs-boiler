import { LangActionsTypes } from "./languageTypes";

export interface setEnglishLanguageAction {
  type: LangActionsTypes.SET_ENGLISH;
}

export interface setArabicLanguageAction {
  type: LangActionsTypes.SET_ARABIC;
}

export const setEnglish = (): setEnglishLanguageAction => {
  return {
    type: LangActionsTypes.SET_ENGLISH,
  };
};

export const setArabic = (): setArabicLanguageAction => {
  return {
    type: LangActionsTypes.SET_ARABIC,
  };
};
