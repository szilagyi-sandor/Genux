// CHECKED 1.0
export interface GCRemoveLoadingAction<T = undefined> {
  type: "REMOVE_LOADING";
  payload: GCRemoveLoadingActionPayload<T>;
}

export interface GCRemoveLoadingActionPayload<T = undefined> {
  connectedId: number | string;
  isParallel?: boolean;
  param?: {
    value?: T;
  };
}
