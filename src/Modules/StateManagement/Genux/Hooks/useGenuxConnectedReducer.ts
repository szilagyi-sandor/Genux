// CHECKED 1.0
import { useReducer } from "react";

import { gcReducer } from "../Reducers/Connected/genuxConnectedReducer";
import { GCReducer } from "../Reducers/Connected/interfaces";
import { defaultGCState } from "../States/Connected/_Constants/defaultGenuxConnectedState";

// This is for reducing boilerplate, it is the same as using useReducer directly.
export const useGenuxConnectedReducer = <P = undefined>(
  reducer: GCReducer<P> = gcReducer
) => useReducer<GCReducer<P>>(reducer, defaultGCState);

export const useGCReducer = useGenuxConnectedReducer;
