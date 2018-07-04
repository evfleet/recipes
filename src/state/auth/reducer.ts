import { Reducer } from "redux";

import { AuthActions, AuthState } from "./types";

const initialState: AuthState = {
  id: null
};

const authReducer: Reducer<AuthState> = (
  state: AuthState = initialState,
  action
) => {
  switch ((action as AuthActions).type) {
    case "auth/LOGIN":
    case "auth/LOGIN_PASS":
    case "auth/LOGIN_FAIL":
    case "auth/LOGOUT":
      return state;

    default:
      return state;
  }
};

export default authReducer;
