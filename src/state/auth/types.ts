import { Action } from "redux";

export interface LoginAction extends Action {
  type: "auth/LOGIN";
  payload: {
    email: string;
    password: string;
  };
}

export interface LoginPassAction extends Action {
  type: "auth/LOGIN_PASS";
}

export interface LoginFailAction extends Action {
  type: "auth/LOGIN_FAIL";
}

export interface LogoutAction extends Action {
  type: "auth/LOGOUT";
}

export type AuthActions =
  | LoginAction
  | LoginPassAction
  | LoginFailAction
  | LogoutAction;

export interface AuthState {
  id: string | null;
}
