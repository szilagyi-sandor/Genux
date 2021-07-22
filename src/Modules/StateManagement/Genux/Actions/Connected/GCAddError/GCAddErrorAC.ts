// CHECKED 1.0
import { GCAddErrorAction, GCAddErrorActionPayload } from "./interfaces";

export const GCAddErrorAC = <T = undefined>(
  payload: GCAddErrorActionPayload<T>
): GCAddErrorAction<T> => ({
  type: "ADD_ERROR",
  payload,
});
