// CHECKED 1.0
export interface GCManageLoadingAction<T = undefined> {
  type: "MANAGE_LOADING";
  payload: GCManageLoadingActionPayload<T>;
}

export interface GCManageLoadingActionPayload<T = undefined> {
  connectedIds: Array<number | string>;
  param?: {
    value?: T;
  };
}
