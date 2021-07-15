import { createContext, Dispatch } from "react";
import { GCAction } from "../Actions/Connected/interfaces";
import { defaultGCState } from "../States/Connected/_Constants/defaultGCState";

import { GCState } from "../States/Connected/_Interfaces/GenuxItemState";

// It's common to store the dispatch and the state in 2 different
// contexts, to prevent unneccessary rerenders. This helps
// reduce boiler plate for GCState.
export const createGCContextPair = <P = undefined>() => ({
  state: createContext<GCState<P>>(defaultGCState),
  dispatch: createContext<Dispatch<GCAction<P>>>(() =>
    console.warn("Context for dispatch was not provided.")
  ),
});
