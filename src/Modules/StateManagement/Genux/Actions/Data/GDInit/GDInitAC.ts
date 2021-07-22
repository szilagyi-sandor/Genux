// CHECKED 1.0
import { GDInitAction } from "./interfaces";

export const GDInitAC = <D = undefined>(payload: D): GDInitAction<D> => ({
  type: "INIT",
  payload,
});
