// CHECKED 1.0
import { GDSetDataAction, GDSetDataActionPayload } from "./interfaces";

export const GDSetDataAC = <P = undefined, D = undefined>(
  payload: GDSetDataActionPayload<P, D>
): GDSetDataAction<P, D> => ({
  type: "SET_DATA",
  payload,
});
