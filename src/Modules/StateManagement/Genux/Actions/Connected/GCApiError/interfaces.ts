import { GCError } from "Modules/StateManagement/Genux/States/Connected/_Interfaces/GenuxConnectedError";

// Adds an error item to the state and removes the connected loading item. Handles the error of an API call.
export interface GCApiErrorAction {
  type: "API_ERROR";
  payload: GCError;
}
