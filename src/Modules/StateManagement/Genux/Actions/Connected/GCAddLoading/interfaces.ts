// Adds a loading item to the state. Usually handles the start of an API call.
export interface GCAddLoadingAction {
  type: "ADD_LOADING";
  payload: number | string;
}
