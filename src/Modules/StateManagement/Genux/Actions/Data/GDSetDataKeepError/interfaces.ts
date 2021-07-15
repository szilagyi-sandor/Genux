// Sets the data without modifying loading or error.
// Modifies: data, dataRecieved, latestParam.
export interface GDSetDataKeepErrorAction<P = undefined, D = undefined> {
  type: "SET_DATA_KEEP_ERROR";
  payload: GDSetDataKeepErrorActionPayload<P, D>;
}

export interface GDSetDataKeepErrorActionPayload<P = undefined, D = undefined> {
  data: D;
  param: P | undefined;
}
