import { GCError } from "Modules/StateManagement/Genux/States/Connected/_Interfaces/GenuxConnectedError";

// Manages all the error items together.
export interface GCManageErrorAction {
  type: "MANAGE_ERROR";
  payload: GCError[];
}
