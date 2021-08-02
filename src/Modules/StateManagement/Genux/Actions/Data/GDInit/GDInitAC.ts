// CHECKED 1.0
import { GDInitAction, GDInitActionPayload } from "./interfaces";

export const GDInitAC = <D = undefined>(
  payload: GDInitActionPayload<D>
): GDInitAction<D> => ({
  type: "INIT",
  payload,
});
