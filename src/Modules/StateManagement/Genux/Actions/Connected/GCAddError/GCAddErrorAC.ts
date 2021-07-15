import { GCError } from "Modules/StateManagement/Genux/States/Connected/_Interfaces/GenuxConnectedError";
import { GCAddErrorAction } from "./interfaces";

export const GCAddErrorAC = (payload: GCError): GCAddErrorAction => ({
  type: "ADD_ERROR",
  payload,
});
