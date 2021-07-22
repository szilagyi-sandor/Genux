// CHECKED 1.0
import { GenuxCommonError } from "Modules/StateManagement/Genux/_Interfaces/CommonError";
import { GDRefreshErrorAction } from "./interfaces";

export const GDRefreshErrorAC = (
  payload: GenuxCommonError | undefined
): GDRefreshErrorAction => ({
  type: "REFRESH_ERROR",
  payload,
});
