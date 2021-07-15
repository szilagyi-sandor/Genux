import { GenuxCommonError } from "../../_Interfaces/CommonError";

export type SimpleApiCaller = (
  onSuccess?: { (): void },
  onError?: { (error: GenuxCommonError): void }
) => Promise<void>;
