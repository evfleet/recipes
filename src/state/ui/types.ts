import { Action } from "redux";

export interface UpdateDimensionsAction extends Action {
  type: "ui/UPDATE_DIMENSIONS";
  payload: {
    width: number;
    height: number;
  };
}

export type UIActions = UpdateDimensionsAction;

export interface UIState {
  dimensions: {
    width: number | null;
    height: number | null;
  };
  ready: boolean;
}
