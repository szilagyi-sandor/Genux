import { Dispatch, ReducerAction, ReducerState } from "react";
import { GCReducer } from "../Reducers/Connected/interfaces";

export type GenuxConnectedStore<P = undefined> = [
  ReducerState<GCReducer<P>>,
  Dispatch<ReducerAction<GCReducer<P>>>
];

export type GCStore<P = undefined> = GenuxConnectedStore<P>;
