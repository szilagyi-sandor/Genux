import { GenuxCommonError } from "Modules/StateManagement/Genux/_Interfaces/CommonError";

// Sets error but does not modify anything else.
export interface GDRefreshErrorAction {
  type: "REFRESH_ERROR";
  // Cannot be ommited on purpose.
  payload: GenuxCommonError | undefined;
}
