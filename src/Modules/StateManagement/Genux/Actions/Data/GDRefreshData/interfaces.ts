// Sets the data without modifying anything else.
export interface GDRefreshDataAction<D = undefined> {
  type: "REFRESH_DATA";
  payload: D;
}
