import { GenuxCommonError } from "Modules/StateManagement/Genux/_Interfaces/CommonError";

export interface GDApiErrorAction<P = undefined> {
  type: "API_ERROR";
  payload: GDApiErrorActionPayload<P>;
}

export interface GDApiErrorActionPayload<P = undefined> {
  param: P | undefined;
  // Cannot be ommited on purpose.
  error: GenuxCommonError | undefined;
}
