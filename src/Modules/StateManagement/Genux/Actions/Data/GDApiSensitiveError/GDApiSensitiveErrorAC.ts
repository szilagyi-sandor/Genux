// CHECKED 1.0
import {
  GDApiSensitiveErrorAction,
  GDApiSensitiveErrorActionPayload,
} from "./interfaces";

export const GDApiSensitiveErrorAC = <P = undefined, D = undefined>(
  payload: GDApiSensitiveErrorActionPayload<P, D>
): GDApiSensitiveErrorAction<P, D> => ({
  type: "API_SENSITIVE_ERROR",
  payload,
});
