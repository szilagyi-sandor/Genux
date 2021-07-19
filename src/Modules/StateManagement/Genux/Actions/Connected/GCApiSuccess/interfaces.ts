export interface GCApiSuccessAction<T = undefined> {
  type: "API_SUCCESS";
  payload: GCApiSuccessActionPayload<T>;
}

export interface GCApiSuccessActionPayload<T = undefined> {
  connectedId: string | number;
  parallel?: boolean;
  param?: {
    value?: T;
  };
}
