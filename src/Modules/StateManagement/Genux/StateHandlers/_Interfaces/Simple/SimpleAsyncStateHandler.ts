// CHECKED 1.0
import { GenuxCommonError } from "../../../_Interfaces/CommonError";

export type SimpleAsyncStateHandler = (
  onSuccess?: { (): void },
  onError?: { (error: GenuxCommonError): void }
) => Promise<void>;

export type SASH = SimpleAsyncStateHandler;
