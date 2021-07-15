import { GCError } from "Modules/StateManagement/Genux/States/Connected/_Interfaces/GenuxConnectedError";
import { GCApiErrorAction } from "./interfaces";

export const GCApiErrorAC = (payload: GCError): GCApiErrorAction => ({
  type: "API_ERROR",
  payload,
});
