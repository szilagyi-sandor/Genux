// CHECKED 1.0
export interface GCAddLoadingAction<T = undefined> {
  type: "ADD_LOADING";
  payload: GCAddLoadingActionPayload<T>;
}

export interface GCAddLoadingActionPayload<T = undefined> {
  connectedId: number | string;
  isParallel?: boolean;
}
