import { GDState } from "../_Interfaces/GenuxDataState";

export const createDefaultGDState = <D = undefined>(
  data: D
): GDState<any, D> => ({
  data,
  loading: false,
});
