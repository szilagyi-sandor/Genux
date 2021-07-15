import { GCApiSuccessAction } from "./interfaces";

export const GCApiSuccessAC = (
  payload: string | number
): GCApiSuccessAction => ({
  type: "API_SUCCESS",
  payload,
});
