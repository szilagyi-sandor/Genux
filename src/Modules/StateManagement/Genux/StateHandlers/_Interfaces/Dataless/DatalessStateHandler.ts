// CHECKED 1.0
import { GenuxCommonError } from "Modules/StateManagement/Genux/_Interfaces/CommonError";

export type DatalessStateHandler<P> = (
  param: P,
  onSuccess?: { (): void },
  onError?: { (error: GenuxCommonError): void }
) => void;

export type DSH<P> = DatalessStateHandler<P>;
