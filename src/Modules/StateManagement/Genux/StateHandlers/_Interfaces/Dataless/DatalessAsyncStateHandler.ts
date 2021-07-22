// CHECKED 1.0
import { GenuxCommonError } from "../../../_Interfaces/CommonError";

export type DatalessAsyncStateHandler<P> = (
  param: P,
  onSuccess?: { (): void },
  onError?: { (error: GenuxCommonError): void }
) => Promise<void>;

export type DASH<P> = DatalessAsyncStateHandler<P>;
