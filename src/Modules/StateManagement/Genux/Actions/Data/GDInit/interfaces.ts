export interface GDInitAction<D = undefined> {
  type: "INIT";
  payload: D;
}
