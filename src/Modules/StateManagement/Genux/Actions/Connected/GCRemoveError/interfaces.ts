export interface GCRemoveErrorAction<T = undefined> {
  type: "REMOVE_ERROR";
  payload: GCRemoveErrorActionPayload<T>;
}

export interface GCRemoveErrorActionPayload<T = undefined> {
  connectedId: number | string;
  parallel?: boolean;
  param?: {
    value?: T;
  };
}
