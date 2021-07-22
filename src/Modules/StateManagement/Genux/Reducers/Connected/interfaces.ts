// CHECKED 1.0
import { Reducer } from "react";

import { GCAction } from "../../Actions/Connected/interfaces";
import { GCState } from "../../States/Connected/_Interfaces/GenuxConnectedState";

export type GenuxConnectedReducer<P = undefined> = Reducer<
  GCState<P>,
  GCAction<P>
>;

export type GCReducer<P = undefined> = GenuxConnectedReducer<P>;
