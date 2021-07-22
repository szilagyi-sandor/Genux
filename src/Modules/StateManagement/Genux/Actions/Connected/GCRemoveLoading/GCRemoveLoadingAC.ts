// CHECKED 1.0
import {
  GCRemoveLoadingAction,
  GCRemoveLoadingActionPayload,
} from "./interfaces";

export const GCRemoveLoadingAC = <T = undefined>(
  payload: GCRemoveLoadingActionPayload<T>
): GCRemoveLoadingAction<T> => ({
  type: "REMOVE_LOADING",
  payload,
});
