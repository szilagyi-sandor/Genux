// CHECKED 1.0
export interface GDRefreshDataAction<D = undefined> {
  type: "REFRESH_DATA";
  payload: D;
}
