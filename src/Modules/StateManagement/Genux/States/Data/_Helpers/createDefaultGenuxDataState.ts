// CHECKED 1.0
import { GDState } from "../_Interfaces/GenuxDataState";

export const createDefaultGenuxDataState = <D = undefined>(
  data: D,
  setDataRecieved?: boolean
): GDState<any, D> => ({
  data,
  dataRecieved: setDataRecieved ? new Date() : undefined,
  loading: false,
});

export const createDefaultGDState = createDefaultGenuxDataState;
