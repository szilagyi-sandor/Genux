// CHECKED 1.0
import { ManageParamAction } from "../_Shared/ManageParam/interfaces";
import { GCAddErrorAction } from "./GCAddError/interfaces";
import { GCAddLoadingAction } from "./GCAddLoading/interfaces";
import { GCApiErrorAction } from "./GCApiError/interfaces";
import { GCApiSuccessAction } from "./GCApiSuccess/interfaces";
import { GCInitAction } from "./GCInit/interfaces";
import { GCManageAction } from "./GCManage/interfaces";
import { GCManageErrorAction } from "./GCManageError/interfaces";
import { GCManageLoadingAction } from "./GCManageLoading/interfaces";
import { GCRemoveErrorAction } from "./GCRemoveError/interfaces";
import { GCRemoveLoadingAction } from "./GCRemoveLoading/interfaces";

// Parallel functionality and the management of the param are configured in each
// action where it makes sense to be used.
export type GenuxConnectedAction<P = undefined> =
  // Manages the state of the params and nothing else.
  | ManageParamAction<P>
  // Sets the inital state with the default data provided.
  | GCInitAction
  // Manages the whole state together. Useful for special cases.
  | GCManageAction<P>
  // Manages all the loading items together. It has param config.
  | GCManageLoadingAction<P>
  // Adds a loading item to the state. It has param and parallel config. Usually handles the start of an API call.
  | GCAddLoadingAction<P>
  // Removes loading items from the state with the given connectedId. It has param and parallel config.
  | GCRemoveLoadingAction<P>
  // Manages all the error items together. It has param config.
  | GCManageErrorAction<P>
  // Adds an error item to the state. It has param and parallel config.
  | GCAddErrorAction<P>
  // Removes error items from the state with the given connectedId. It has param and parallel config.
  | GCRemoveErrorAction<P>
  // Removes loading items and an error items from the state with the given connectedId. It has param and parallel config. Handles the success of an API call.
  | GCApiSuccessAction<P>
  // Adds an error item to the state and removes loading items. It has param and parallel config. Handles the error of an API call.
  | GCApiErrorAction<P>;

export type GCAction<P = undefined> = GenuxConnectedAction<P>;
