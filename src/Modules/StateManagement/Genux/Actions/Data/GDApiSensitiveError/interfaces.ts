// Usually handles the error of an API call and modifies the data.

import { GenuxCommonError } from "Modules/StateManagement/Genux/_Interfaces/CommonError";

// Modifies: data, dataRecieved, error, latestParam, loading (to false)
export interface GDApiSensitiveErrorAction<P = undefined, D = undefined> {
  type: "API_SENSITIVE_ERROR";
  payload: GDApiSensitiveErrorActionPayload<P, D>;
}

export interface GDApiSensitiveErrorActionPayload<
  P = undefined,
  D = undefined
> {
  data: D;
  param: P | undefined;
  // Cannot be ommited on purpose.
  error: GenuxCommonError | undefined;
}
