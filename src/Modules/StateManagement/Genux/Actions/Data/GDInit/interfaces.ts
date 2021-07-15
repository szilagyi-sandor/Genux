// Sets the inital state with the default data provided.
export interface GDInitAction<D = undefined> {
  type: "INIT";
  payload: D;
}
