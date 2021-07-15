import { GCRemoveErrorAction } from "./interfaces";

export const GCRemoveErrorAC = (
  payload: number | string
): GCRemoveErrorAction => ({
  type: "REMOVE_ERROR",
  payload,
});
