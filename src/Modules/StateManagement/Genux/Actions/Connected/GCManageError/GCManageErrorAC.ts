// CHECKED 1.0
import { GCManageErrorAction, GCManageErrorActionPayload } from "./interfaces";

export const GCManageErrorAC = <T = undefined>(
  payload: GCManageErrorActionPayload<T>
): GCManageErrorAction<T> => ({
  type: "MANAGE_ERROR",
  payload,
});
