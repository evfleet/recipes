import { ActionCreator } from "redux";

import { UpdateDimensionsAction } from "./types";

export const updateDimensions: ActionCreator<UpdateDimensionsAction> = (
  width: number,
  height: number
) => ({
  type: "ui/UPDATE_DIMENSIONS",
  payload: {
    width,
    height
  }
});
