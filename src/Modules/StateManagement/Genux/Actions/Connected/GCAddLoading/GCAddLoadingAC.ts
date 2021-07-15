import { GCAddLoadingAction } from "./interfaces";

export const GCAddLoadingAC = (
  payload: number | string
): GCAddLoadingAction => ({
  type: "ADD_LOADING",
  payload,
});
