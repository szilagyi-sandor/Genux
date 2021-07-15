import { createContext, Dispatch } from "react";

import { GDAction } from "../Actions/Data/interfaces";
import { createDefaultGDState } from "../States/Data/_Helpers/createDefaultGDState";
import { GDState } from "../States/Data/_Interfaces/GenuxDataState";

// It's common to store the dispatch and the state in 2 different
// contexts, to prevent unneccessary rerenders. This helps
// reduce boiler plate for GDState.
export const createGDContextPair = <P = undefined, D = undefined>(
  defaultData: D
) => ({
  state: createContext<GDState<P, D>>(createDefaultGDState(defaultData)),
  dispatch: createContext<Dispatch<GDAction<P, D>>>(() =>
    console.warn("Context for dispatch was not provided.")
  ),
});
