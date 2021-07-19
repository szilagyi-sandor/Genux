export interface GCRemoveLoadingAction<T = undefined> {
  type: "REMOVE_LOADING";
  payload: GCRemoveLoadingActionPayload<T>;
}

export interface GCRemoveLoadingActionPayload<T = undefined> {
  connectedId: number | string;
  parallel?: boolean;
  param?: {
    value?: T;
  };
}
