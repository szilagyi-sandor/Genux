// CHECKED 1.0
import { GenuxCommonError } from "Modules/StateManagement/Genux/_Interfaces/CommonError";

export type ParamlessAsyncStateHandler<D> = (
  onSuccess?: { (data: D): void },
  onError?: { (error: GenuxCommonError): void }
) => Promise<void>;

export type PASH<D> = ParamlessAsyncStateHandler<D>;
