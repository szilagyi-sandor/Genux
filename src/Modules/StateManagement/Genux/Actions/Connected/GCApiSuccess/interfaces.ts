// Removes a loading and an error item from the state. Handles the success of an API call.
export interface GCApiSuccessAction {
  type: "API_SUCCESS";
  payload: string | number;
}
