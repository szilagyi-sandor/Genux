// CHECKED 1.0
import { useReducer } from "react";

import { gdReducer } from "../Reducers/Data/genuxDataReducer";
import { GDReducer } from "../Reducers/Data/interfaces";
import { createDefaultGDState } from "../States/Data/_Helpers/createDefaultGenuxDataState";

// This is for reducing boilerplate, it is the same as using useReducer directly.
export const useGenuxDataReducer = <P = undefined, D = undefined>(
  defaultData: D,
  setDataRecieved: boolean = false,
  reducer: GDReducer<P, D> = gdReducer
) =>
  useReducer<GDReducer<P, D>>(
    reducer,
    createDefaultGDState(defaultData, setDataRecieved)
  );

export const useGDReducer = useGenuxDataReducer;
