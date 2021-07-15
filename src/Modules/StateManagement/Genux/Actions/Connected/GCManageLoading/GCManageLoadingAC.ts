import { GCManageLoadingAction } from "./interfaces";

export const GCManageLoadingAC = (
  payload: Array<string | number>
): GCManageLoadingAction => ({
  type: "MANAGE_LOADING",
  payload,
});
