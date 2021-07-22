// CHECKED 1.0
import { Dispatch, Reducer, ReducerAction } from "react";

export type LoadableStore = [
  {
    loading?: boolean;
    loadingIds?: Array<string | number>;
  },
  Dispatch<ReducerAction<Reducer<any, any>>>
];

export interface ComposedLoadableStores {
  [k: string]: LoadableStore | ComposedLoadableStores;
}
