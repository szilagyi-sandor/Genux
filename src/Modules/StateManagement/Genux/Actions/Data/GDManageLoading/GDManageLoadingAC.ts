// CHECKED 1.0
import { GDManageLoadingAction } from "./interfaces";

export const GDManageLoadingAC = (payload: boolean): GDManageLoadingAction => ({
  type: "MANAGE_LOADING",
  payload,
});
