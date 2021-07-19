import {
  GCManageLoadingAction,
  GCManageLoadingActionPayload,
} from "./interfaces";

export const GCManageLoadingAC = <T = undefined>(
  payload: GCManageLoadingActionPayload<T>
): GCManageLoadingAction<T> => ({
  type: "MANAGE_LOADING",
  payload,
});
