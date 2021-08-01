import { userActionTypes } from "./userTypes";

export interface SetUserAction {
  type: userActionTypes.SET_CURRENT_USER;
  payload: SetUserPayLoad;
}

export interface SetUserPayLoad {
  id: number;
  name: string;
  role: number;
  email: string;
  phoneNumber: number;
}

export const setUser = (user: SetUserPayLoad): SetUserAction => {
  return {
    type: userActionTypes.SET_CURRENT_USER,
    payload: user,
  };
};
