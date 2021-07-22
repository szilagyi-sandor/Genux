// CHECKED 1.0
import { GenuxCommonError } from "Modules/StateManagement/Genux/_Interfaces/CommonError";

export interface GenuxDataState<P = undefined, D = undefined> {
  data: D;
  dataRecieved?: Date;
  // The parameter for the latest request.
  latestParam?: P;
  // The current state of the parameter. When the latestParam is set, this is set to the same entity.
  param?: P;
  error?: GenuxCommonError;
  loading: boolean;
}

export type GDState<P = undefined, D = undefined> = GenuxDataState<P, D>;
