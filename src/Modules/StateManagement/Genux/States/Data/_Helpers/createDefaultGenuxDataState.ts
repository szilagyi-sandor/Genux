// CHECKED 1.0
import { GDState } from "../_Interfaces/GenuxDataState";

export const createDefaultGenuxDataState = <D = undefined>(
  data: D
): GDState<any, D> => ({
  data,
  loading: false,
});

export const createDefaultGDState = createDefaultGenuxDataState;
