import { GDApiErrorAction, GDApiErrorActionPayload } from "./interfaces";

export const GDApiErrorAC = <P = undefined>(
  payload: GDApiErrorActionPayload<P>
): GDApiErrorAction<P> => ({
  type: "API_ERROR",
  payload,
});
