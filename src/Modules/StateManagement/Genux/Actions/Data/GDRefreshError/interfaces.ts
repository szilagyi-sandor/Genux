// CHECKED 1.0
import { GenuxCommonError } from "Modules/StateManagement/Genux/_Interfaces/CommonError";

export interface GDRefreshErrorAction {
  type: "REFRESH_ERROR";
  // Cannot be ommited on purpose.
  payload: GenuxCommonError | undefined;
}
