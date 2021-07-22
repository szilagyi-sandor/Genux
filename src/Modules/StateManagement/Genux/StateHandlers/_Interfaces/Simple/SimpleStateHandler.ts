// CHECKED 1.0
import { GenuxCommonError } from "../../../_Interfaces/CommonError";

export type SimpleStateHandler = (
  onSuccess?: { (): void },
  onError?: { (error: GenuxCommonError): void }
) => void;

export type SSH = SimpleStateHandler;
