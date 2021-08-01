import { LangActionsTypes } from "./languageTypes";

export interface setLanguageAction {
  type: string;
}

export const setEnglish = (): setLanguageAction => {
  return {
    type: LangActionsTypes.SET_ENGLISH,
  };
};

export const setArabic = (): setLanguageAction => {
  return {
    type: LangActionsTypes.SET_ARABIC,
  };
};
