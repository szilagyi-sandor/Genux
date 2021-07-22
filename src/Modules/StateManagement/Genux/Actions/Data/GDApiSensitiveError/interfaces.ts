// CHECKED 1.0
import { GenuxCommonError } from "Modules/StateManagement/Genux/_Interfaces/CommonError";

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
