import { GenuxCommonError } from "../../_Interfaces/CommonError";

export type DatalessApiCaller<P> = (
  param: P,
  onSuccess?: { (): void },
  onError?: { (error: GenuxCommonError): void }
) => Promise<void>;
