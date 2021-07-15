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

export type GenuxDataAction<P = undefined, D = undefined> =
  | ManageParamAction<P>
  | GDInitAction<D>
  | GDManageAction<P, D>
  | GDManageLoadingAction
  | GDApiSuccessAction<P, D>
  | GDSetDataAction<P, D>
  | GDSetDataKeepErrorAction<P, D>
  | GDRefreshDataAction<D>
  | GDApiErrorAction<P>
  | GDApiSensitiveErrorAction<P, D>
  | GDSetErrorAction<P>
  | GDSetSensitiveErrorAction<P, D>
  | GDRefreshErrorAction;

export type GDAction<P = undefined, D = undefined> = GenuxDataAction<P, D>;
