// Sets error and data without modifying loading.

import { GenuxCommonError } from "Modules/StateManagement/Genux/_Interfaces/CommonError";

// Modifies: data, dataRecieved, error, latestParam, loading (to false)
export interface GDSetSensitiveErrorAction<P = undefined, D = undefined> {
  type: "SET_SENSITIVE_ERROR";
  payload: GDSetSensitiveErrorActionPayload<P, D>;
}

export interface GDSetSensitiveErrorActionPayload<
  P = undefined,
  D = undefined
> {
  data: D;
  param: P | undefined;
  // Cannot be ommited on purpose.
  error: GenuxCommonError | undefined;
}
