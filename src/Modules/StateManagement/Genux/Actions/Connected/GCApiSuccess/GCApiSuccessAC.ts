// CHECKED 1.0
import { GCApiSuccessAction, GCApiSuccessActionPayload } from "./interfaces";

export const GCApiSuccessAC = <T = undefined>(
  payload: GCApiSuccessActionPayload<T>
): GCApiSuccessAction<T> => ({
  type: "API_SUCCESS",
  payload,
});
