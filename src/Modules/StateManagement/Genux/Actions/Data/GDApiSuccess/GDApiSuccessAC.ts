// CHECKED 1.0
import { GDApiSuccessAction, GDApiSuccessActionPayload } from "./interfaces";

export const GDApiSuccessAC = <P = undefined, D = undefined>(
  payload: GDApiSuccessActionPayload<P, D>
): GDApiSuccessAction<P, D> => ({
  type: "API_SUCCESS",
  payload,
});
