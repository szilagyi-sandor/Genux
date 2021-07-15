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

export type GenuxConnectedAction<P = undefined> =
  | ManageParamAction<P>
  | GCInitAction
  | GCManageAction<P>
  | GCManageLoadingAction
  | GCAddLoadingAction
  | GCRemoveLoadingAction
  | GCManageErrorAction
  | GCAddErrorAction
  | GCRemoveErrorAction
  | GCApiSuccessAction
  | GCApiErrorAction;

export type GCAction<P = undefined> = GenuxConnectedAction<P>;
