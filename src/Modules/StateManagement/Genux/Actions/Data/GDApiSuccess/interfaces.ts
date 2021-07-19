export interface GDApiSuccessAction<P = undefined, D = undefined> {
  type: "API_SUCCESS";
  payload: GDApiSuccessActionPayload<P, D>;
}

export interface GDApiSuccessActionPayload<P = undefined, D = undefined> {
  data: D;
  param: P | undefined;
}
