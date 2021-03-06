import { Reducer } from "redux";

import { UIActions, UIState } from "./types";

const initialState: UIState = {
  dimensions: {
    width: null,
    height: null
  },
  ready: false
};

const uiReducer: Reducer<UIState> = (state: UIState = initialState, action) => {
  switch ((action as UIActions).type) {
    case "ui/UPDATE_DIMENSIONS":
      return {
        ...state,
        dimensions: {
          width: action.payload.width,
          height: action.payload.height
        }
      };

    default:
      return state;
  }
};

export default uiReducer;
