// CHECKED 1.0
import { ManageParamAction } from "../_Shared/ManageParam/interfaces";
import { GDApiErrorAction } from "./GDApiError/interfaces";
import { GDApiSensitiveErrorAction } from "./GDApiSensitiveError/interfaces";
import { GDApiSuccessAction } from "./GDApiSuccess/interfaces";
import { GDInitAction } from "./GDInit/interfaces";
import { GDManageAction } from "./GDManage/interfaces";
import { GDManageLoadingAction } from "./GDManageLoading/interfaces";
import { GDRefreshDataAction } from "./GDRefreshData/interfaces";
import { GDRefreshErrorAction } from "./GDRefreshError/interfaces";
import { GDSetDataAction } from "./GDSetData/interfaces";
import { GDSetDataKeepErrorAction } from "./GDSetDataKeepError/interfaces";
import { GDSetErrorAction } from "./GDSetError/interfaces";
import { GDSetSensitiveErrorAction } from "./GDSetSensitiveError/interfaces";

// This state does not support parallel usage and the params are handled whenever a new data is recieved.
export type GenuxDataAction<P = undefined, D = undefined> =
  // Manages the state of the params and nothing else.
  | ManageParamAction<P>
  // Sets the inital state with the default data provided.
  | GDInitAction<D>
  // Manages the whole state together. Useful for special cases.
  | GDManageAction<P, D>
  // Manages the loading and nothing else. Usually handles the start of an API call.
  | GDManageLoadingAction
  // Usually handles the success of an API call.
  // Modifies: data, dataRecieved, latestParam, error(to undefined), loading (to false)
  | GDApiSuccessAction<P, D>
  // Sets the data without modifying loading.
  // Modifies: data, dataRecieved, latestParam, error(to undefined).
  | GDSetDataAction<P, D>
  // Sets the data without modifying loading or error.
  // Modifies: data, dataRecieved, latestParam.
  | GDSetDataKeepErrorAction<P, D>
  // Sets the data and dataRecieved without modifying anything else.
  | GDRefreshDataAction<D>
  // Usually handles the error of an API call.
  // Modifies: error, latestParam, loading (to false)
  | GDApiErrorAction<P>
  // Usually handles the error of an API call and modifies the data.
  // Modifies: data, dataRecieved, error, latestParam, loading (to false)
  | GDApiSensitiveErrorAction<P, D>
  // Sets error without modifying loading.
  // Modifies: error, latestParam, loading (to false)
  | GDSetErrorAction<P>
  // Sets error and data without modifying loading.
  // Modifies: data, dataRecieved, error, latestParam, loading (to false)
  | GDSetSensitiveErrorAction<P, D>
  // Sets error but does not modify anything else.
  | GDRefreshErrorAction;

export type GDAction<P = undefined, D = undefined> = GenuxDataAction<P, D>;
