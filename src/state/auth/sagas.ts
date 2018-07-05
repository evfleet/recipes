import { all, fork, take } from "redux-saga/effects";

import { LogoutAction } from "./types";

function* logout() {
  try {
    console.log("logout");
  } catch (error) {
    console.log(error);
  }

  return 123;
}

function* watchLogout() {
  const logoutType: LogoutAction["type"] = "auth/LOGOUT";
  while (true) {
    yield take(logoutType);
    yield fork(logout);
  }
}

export default function* authSaga() {
  yield all([fork(watchLogout)]);
}
