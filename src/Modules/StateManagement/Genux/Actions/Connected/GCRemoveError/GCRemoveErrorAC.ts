// CHECKED 1.0
import { GCRemoveErrorAction, GCRemoveErrorActionPayload } from "./interfaces";

export const GCRemoveErrorAC = <T = undefined>(
  payload: GCRemoveErrorActionPayload<T>
): GCRemoveErrorAction<T> => ({
  type: "REMOVE_ERROR",
  payload,
});
