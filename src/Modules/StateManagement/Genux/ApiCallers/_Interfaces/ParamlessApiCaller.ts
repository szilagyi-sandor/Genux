import { GenuxCommonError } from "../../_Interfaces/CommonError";

export type ParamlessApiCaller<D> = (
  onSuccess?: { (data: D): void },
  onError?: { (error: GenuxCommonError): void }
) => Promise<void>;
