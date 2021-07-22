// CHECKED 1.0
import { GenuxCommonError } from "../../../_Interfaces/CommonError";

export type ParamlessStateHandler<D> = (
  onSuccess?: { (data: D): void },
  onError?: { (error: GenuxCommonError): void }
) => void;

export type PSH<D> = ParamlessStateHandler<D>;
