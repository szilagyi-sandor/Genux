export interface GDSetDataAction<P = undefined, D = undefined> {
  type: "SET_DATA";
  payload: GDSetDataActionPayload<P, D>;
}

export interface GDSetDataActionPayload<P = undefined, D = undefined> {
  data: D;
  param: P | undefined;
}
