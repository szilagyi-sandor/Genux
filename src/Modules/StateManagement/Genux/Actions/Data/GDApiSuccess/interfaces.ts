// Usually handles the success of an API call.
// Modifies: data, dataRecieved, latestParam, error(to undefined), loading (to false)
export interface GDApiSuccessAction<P = undefined, D = undefined> {
  type: "API_SUCCESS";
  payload: GDApiSuccessActionPayload<P, D>;
}

export interface GDApiSuccessActionPayload<P = undefined, D = undefined> {
  data: D;
  param: P | undefined;
}
