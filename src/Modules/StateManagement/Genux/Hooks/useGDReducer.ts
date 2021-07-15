import { useReducer } from "react";

import { genuxDataReducer } from "../Reducers/Data/genuxDataReducer";
import { GDReducer } from "../Reducers/Data/interfaces";
import { createDefaultGDState } from "../States/Data/_Helpers/createDefaultGDState";

// This is for reducing boilerplate, it is the same as using useReducer directly.
export const useGenuxDataReducer = <P = undefined, D = undefined>(
  defaultData: D,
  reducer: GDReducer<P, D> = genuxDataReducer
) => useReducer<GDReducer<P, D>>(reducer, createDefaultGDState(defaultData));
