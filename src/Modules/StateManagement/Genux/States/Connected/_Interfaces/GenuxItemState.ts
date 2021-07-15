import { GCError } from "./GenuxConnectedError";

export interface GenuxConnectedState<T = undefined> {
  // The current state of the parameter. We don't store latest param.
  param?: T;
  errors: GCError[];
  loadingIds: Array<number | string>;
}

export type GCState<T = undefined> = GenuxConnectedState<T>;
