// CHECKED 1.0
import { GenuxCommonError } from "Modules/StateManagement/Genux/_Interfaces/CommonError";

export type StateHandler<P, D> = (
  param: P,
  onSuccess?: { (data: D): void },
  onError?: { (error: GenuxCommonError): void }
) => void;

export type SH<P, D> = StateHandler<P, D>;
