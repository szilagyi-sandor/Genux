// CHECKED 1.0
export interface GCRemoveErrorAction<T = undefined> {
  type: "REMOVE_ERROR";
  payload: GCRemoveErrorActionPayload<T>;
}

export interface GCRemoveErrorActionPayload<T = undefined> {
  connectedId: number | string;
  isParallel?: boolean;
  param?: {
    value?: T;
  };
}
