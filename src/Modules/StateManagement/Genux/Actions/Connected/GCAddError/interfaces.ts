import { GCError } from "Modules/StateManagement/Genux/States/Connected/_Interfaces/GenuxConnectedError";

// Adds an error item to the state.
export interface GCAddErrorAction {
  type: "ADD_ERROR";
  payload: GCError;
}
