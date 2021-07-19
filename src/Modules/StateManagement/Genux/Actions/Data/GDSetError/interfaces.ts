import { GenuxCommonError } from "Modules/StateManagement/Genux/_Interfaces/CommonError";

export interface GDSetErrorAction<P = undefined> {
  type: "SET_ERROR";
  payload: GDSetErrorActionPayload<P>;
}

export interface GDSetErrorActionPayload<P = undefined> {
  param: P | undefined;
  // Cannot be ommited on purpose.
  error: GenuxCommonError | undefined;
}
