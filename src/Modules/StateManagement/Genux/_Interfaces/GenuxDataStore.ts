// CHECKED 1.0
import { Dispatch } from "react";

import { GDAction } from "../Actions/Data/interfaces";
import { GDState } from "../States/Data/_Interfaces/GenuxDataState";

export type GenuxDataStore<P = undefined, D = undefined> = [
  GDState<P, D>,
  Dispatch<GDAction<P, D>>
];

export type GDStore<P = undefined, D = undefined> = GenuxDataStore<P, D>;
