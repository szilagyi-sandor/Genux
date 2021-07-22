// CHECKED 1.0
import { ManageParamAction } from "./interfaces";

export const manageParamAC = <T>(payload: T): ManageParamAction<T> => ({
  type: "MANAGE_PARAM",
  payload,
});
