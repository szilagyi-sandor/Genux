// Manages all the loading items together.
export interface GCManageLoadingAction {
  type: "MANAGE_LOADING";
  payload: Array<number | string>;
}
