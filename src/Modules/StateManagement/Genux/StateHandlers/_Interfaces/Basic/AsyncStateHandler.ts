// CHECKED 1.0
import { GenuxCommonError } from "../../../_Interfaces/CommonError";

export type AsyncStateHandler<P, D> = (
  param: P,
  onSuccess?: { (data: D): void },
  onError?: { (error: GenuxCommonError): void }
) => Promise<void>;

export type ASH<P, D> = AsyncStateHandler<P, D>;
