import { ActionCreator } from "redux";

import {
  LoginAction,
  LoginPassAction,
  LoginFailAction,
  LogoutAction
} from "./types";

export const login: ActionCreator<LoginAction> = (
  email: string,
  password: string
) => ({
  type: "auth/LOGIN",
  payload: {
    email,
    password
  }
});

export const loginPass: ActionCreator<LoginPassAction> = () => ({
  type: "auth/LOGIN_PASS"
});

export const loginFail: ActionCreator<LoginFailAction> = () => ({
  type: "auth/LOGIN_FAIL"
});

export const logout: ActionCreator<LogoutAction> = () => ({
  type: "auth/LOGOUT"
});
