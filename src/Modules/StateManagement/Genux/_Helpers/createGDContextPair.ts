// CHECKED 1.0
import { createContext, Dispatch } from "react";

import { GDAction } from "../Actions/Data/interfaces";
import { createDefaultGDState } from "../States/Data/_Helpers/createDefaultGenuxDataState";
import { GDState } from "../States/Data/_Interfaces/GenuxDataState";

// Explanation: #3.
export const createGDContextPair = <P = undefined, D = undefined>(
  defaultData: D
) => ({
  state: createContext<GDState<P, D>>(createDefaultGDState(defaultData)),
  dispatch: createContext<Dispatch<GDAction<P, D>>>(() =>
    console.warn("Context for dispatch was not provided.")
  ),
});
