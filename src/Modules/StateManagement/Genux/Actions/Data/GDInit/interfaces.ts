// CHECKED 1.0
export interface GDInitAction<D = undefined> {
  type: "INIT";
  payload: GDInitActionPayload<D>;
}

export interface GDInitActionPayload<D = undefined> {
  data: D;
  setDataRecieved?: boolean;
}
