import { useReducer } from "react";

import { genuxConnectedReducer } from "../Reducers/Connected/genuxConnectedReducer";
import { GCReducer } from "../Reducers/Connected/interfaces";
import { defaultGCState } from "../States/Connected/_Constants/defaultGCState";

// This is for reducing boilerplate, it is the same as using useReducer directly.
export const useGenuxConnectedReducer = <P = undefined>(
  reducer: GCReducer<P> = genuxConnectedReducer
) => useReducer<GCReducer<P>>(reducer, defaultGCState);
