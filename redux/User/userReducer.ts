import { userActionTypes } from "./userTypes";
import { SetUserAction } from "./userAction";

export interface UserState {
  name?: string | null;
  id?: number | null;
  role?: number | null;
  email?: string | null;
  phoneNumber?: number | null;
}

const INITAIL_STATE: UserState = {
  name: "Welcome",
  id: null,
  role: null,
  email: null,
  phoneNumber: null,
};

type Action = SetUserAction;

const userReducer = (state = INITAIL_STATE, action: Action): UserState => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        name: action.payload.name,
        id: action.payload.id,
        role: action.payload.role,
        email: action.payload.email,
        phoneNumber: action.payload.phoneNumber,
      };

    default:
      return state;
  }
};
export default userReducer;
