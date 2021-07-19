import { GCError } from "Modules/StateManagement/Genux/States/Connected/_Interfaces/GenuxConnectedError";

export interface GCApiErrorAction<T = undefined> {
  type: "API_ERROR";
  payload: GCApiErrorActionPayload<T>;
}

export interface GCApiErrorActionPayload<T = undefined> {
  error: GCError;
  parallel?: boolean;
  param?: {
    value?: T;
  };
}
