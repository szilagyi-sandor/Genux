// CHECKED 1.0
import { createContext, Dispatch } from "react";

import { GCAction } from "../Actions/Connected/interfaces";
import { defaultGCState } from "../States/Connected/_Constants/defaultGenuxConnectedState";
import { GCState } from "../States/Connected/_Interfaces/GenuxConnectedState";

// Explanation: #3.
export const createGCContextPair = <P = undefined>() => ({
  state: createContext<GCState<P>>(defaultGCState),
  dispatch: createContext<Dispatch<GCAction<P>>>(() =>
    console.warn("Context for dispatch was not provided.")
  ),
});
