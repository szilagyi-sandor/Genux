import { GDSetErrorAction, GDSetErrorActionPayload } from "./interfaces";

export const GDSetErrorAC = <P = undefined>(
  payload: GDSetErrorActionPayload<P>
): GDSetErrorAction<P> => ({
  type: "SET_ERROR",
  payload,
});
