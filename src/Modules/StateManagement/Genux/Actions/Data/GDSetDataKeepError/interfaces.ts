// CHECKED 1.0
export interface GDSetDataKeepErrorAction<P = undefined, D = undefined> {
  type: "SET_DATA_KEEP_ERROR";
  payload: GDSetDataKeepErrorActionPayload<P, D>;
}

export interface GDSetDataKeepErrorActionPayload<P = undefined, D = undefined> {
  data: D;
  param: P | undefined;
}
