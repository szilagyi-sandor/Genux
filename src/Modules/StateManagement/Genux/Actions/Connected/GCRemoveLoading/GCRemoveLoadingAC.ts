import { GCRemoveLoadingAction } from "./interfaces";

export const GCRemoveLoadingAC = (
  payload: number | string
): GCRemoveLoadingAction => ({
  type: "REMOVE_LOADING",
  payload,
});
