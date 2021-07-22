// CHECKED 1.0
import { GCError } from "Modules/StateManagement/Genux/States/Connected/_Interfaces/GenuxConnectedError";

export interface GCAddErrorAction<T = undefined> {
  type: "ADD_ERROR";
  payload: GCAddErrorActionPayload<T>;
}

export interface GCAddErrorActionPayload<T = undefined> {
  error: GCError;
  isParallel?: boolean;
  param?: {
    value?: T;
  };
}
