// CHECKED 1.0
export interface GCApiSuccessAction<T = undefined> {
  type: "API_SUCCESS";
  payload: GCApiSuccessActionPayload<T>;
}

export interface GCApiSuccessActionPayload<T = undefined> {
  connectedId: string | number;
  isParallel?: boolean;
  param?: {
    value?: T;
  };
}
