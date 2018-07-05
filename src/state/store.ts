import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import { authReducer, AuthState } from "./auth";
import { uiReducer, UIState } from "./ui";

const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

export interface AppState {
  auth: AuthState;
  ui: UIState;
}

export default store;
