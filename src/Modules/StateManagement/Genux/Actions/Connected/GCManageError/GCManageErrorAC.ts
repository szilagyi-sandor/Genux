import { GCError } from "Modules/StateManagement/Genux/States/Connected/_Interfaces/GenuxConnectedError";
import { GCManageErrorAction } from "./interfaces";

export const GCManageErrorAC = (
  payload: Array<GCError>
): GCManageErrorAction => ({
  type: "MANAGE_ERROR",
  payload,
});
