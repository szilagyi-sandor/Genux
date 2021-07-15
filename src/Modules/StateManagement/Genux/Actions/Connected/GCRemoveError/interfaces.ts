// Removes an error item from the state.
export interface GCRemoveErrorAction {
  type: "REMOVE_ERROR";
  payload: number | string;
}
