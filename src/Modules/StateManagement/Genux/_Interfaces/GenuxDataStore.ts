import { Dispatch, ReducerAction, ReducerState } from "react";
import { GDReducer } from "../Reducers/Data/interfaces";

export type GenuxDataStore<P = undefined, D = undefined> = [
  ReducerState<GDReducer<P, D>>,
  Dispatch<ReducerAction<GDReducer<P, D>>>
];

export type GDStore<P = undefined, D = undefined> = GenuxDataStore<P, D>;
