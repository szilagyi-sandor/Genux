// CHECKED 1.0
import { GCApiErrorAction, GCApiErrorActionPayload } from "./interfaces";

export const GCApiErrorAC = <T = undefined>(
  payload: GCApiErrorActionPayload<T>
): GCApiErrorAction<T> => ({
  type: "API_ERROR",
  payload,
});
