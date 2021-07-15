import {
  GDSetSensitiveErrorAction,
  GDSetSensitiveErrorActionPayload,
} from "./interfaces";

export const GDSetSensitiveErrorAC = <P = undefined, D = undefined>(
  payload: GDSetSensitiveErrorActionPayload<P, D>
): GDSetSensitiveErrorAction<P, D> => ({
  type: "SET_SENSITIVE_ERROR",
  payload,
});
