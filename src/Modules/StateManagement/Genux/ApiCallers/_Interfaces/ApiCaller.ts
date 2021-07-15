import { GenuxCommonError } from "../../_Interfaces/CommonError";

export type ApiCaller<P, D> = (
  param: P,
  onSuccess?: { (data: D): void },
  onError?: { (error: GenuxCommonError): void }
) => Promise<void>;
