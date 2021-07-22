// CHECKED 1.0
import { GCError } from "Modules/StateManagement/Genux/States/Connected/_Interfaces/GenuxConnectedError";

export interface GCManageErrorAction<T = undefined> {
  type: "MANAGE_ERROR";
  payload: GCManageErrorActionPayload<T>;
}

export interface GCManageErrorActionPayload<T = undefined> {
  errors: GCError[];
  param?: {
    value?: T;
  };
}
