import { GenuxCommonError } from "Modules/StateManagement/Genux/_Interfaces/CommonError";

export interface GenuxConnectedError extends GenuxCommonError {
  connectedId: number | string;
}

export type GCError = GenuxConnectedError;
