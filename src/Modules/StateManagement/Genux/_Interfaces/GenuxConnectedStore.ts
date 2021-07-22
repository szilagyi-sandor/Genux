// CHECKED 1.0
import { Dispatch } from "react";

import { GCAction } from "../Actions/Connected/interfaces";
import { GCState } from "../States/Connected/_Interfaces/GenuxConnectedState";

export type GenuxConnectedStore<P = undefined> = [
  GCState<P>,
  Dispatch<GCAction<P>>
];

export type GCStore<P = undefined> = GenuxConnectedStore<P>;
