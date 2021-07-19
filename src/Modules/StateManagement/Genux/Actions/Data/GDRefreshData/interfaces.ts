export interface GDRefreshDataAction<D = undefined> {
  type: "REFRESH_DATA";
  payload: D;
}
