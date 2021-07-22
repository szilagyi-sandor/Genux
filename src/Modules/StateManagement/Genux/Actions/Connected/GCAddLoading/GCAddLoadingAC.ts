// CHECKED 1.0
import { GCAddLoadingAction, GCAddLoadingActionPayload } from "./interfaces";

export const GCAddLoadingAC = <T = undefined>(
  payload: GCAddLoadingActionPayload<T>
): GCAddLoadingAction<T> => ({
  type: "ADD_LOADING",
  payload,
});
