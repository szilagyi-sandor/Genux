import { Reducer } from "react";
import { GDAction } from "../../Actions/Data/interfaces";
import { GDState } from "../../States/Data/_Interfaces/GenuxDataState";

export type GenuxDataReducer<P = undefined, D = undefined> = Reducer<
  GDState<P, D>,
  GDAction<P, D>
>;

export type GDReducer<P = undefined, D = undefined> = GenuxDataReducer<P, D>;
