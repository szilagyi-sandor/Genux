// CHECKED 1.0
import {
  GDSetDataKeepErrorAction,
  GDSetDataKeepErrorActionPayload,
} from "./interfaces";

export const GDSetDataKeepErrorAC = <P = undefined, D = undefined>(
  payload: GDSetDataKeepErrorActionPayload<P, D>
): GDSetDataKeepErrorAction<P, D> => ({
  type: "SET_DATA_KEEP_ERROR",
  payload,
});
