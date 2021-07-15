import { useCallback } from "react";

import { AuthApiCallers } from "../interfaces";
import { GlobalStores } from "../../../interfaces";
import { GDApiSuccessAC } from "../../../../../Genux/Actions/Data/GDApiSuccess/GDApiSuccessAC";
import { logoutF } from "../../../../../../Auth/API/logoutF";
import { Undefinedable } from "../../../../../Genux/_Interfaces/Undefinedable";
import { User } from "../../../../../../Auth/_Interfaces/User";
import { getError } from "../../../../../../../_Helpers/getError";
import { GCAddLoadingAC } from "Modules/StateManagement/Genux/Actions/Connected/GCAddLoading/GCAddLoadingAC";
import { GCApiSuccessAC } from "Modules/StateManagement/Genux/Actions/Connected/GCApiSuccess/GCApiSuccessAC";
import { GCApiErrorAC } from "Modules/StateManagement/Genux/Actions/Connected/GCApiError/GCApiErrorAC";

export const useLogoutACC = ({
  authStores: {
    user: [, userDispatch],
    logout: [, logoutDispatch],
  },
}: GlobalStores): AuthApiCallers["logout"] =>
  useCallback(
    async (onSuccess, onError) => {
      try {
        logoutDispatch(GCAddLoadingAC(1));

        await logoutF();

        userDispatch(
          GDApiSuccessAC<undefined, Undefinedable<User>>({
            data: undefined,
            param: undefined,
          })
        );

        logoutDispatch(GCApiSuccessAC(1));

        onSuccess && onSuccess();
      } catch (error) {
        const _error = getError(error);
        logoutDispatch(GCApiErrorAC({ ..._error, connectedId: 1 }));
        onError && onError(_error);
      }
    },
    [userDispatch, logoutDispatch]
  );
