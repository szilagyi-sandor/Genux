// CHECKED 1.0
import { useCallback } from "react";

import { AuthSH } from "../interfaces";
import { GlobalStores } from "../../../interfaces";
import { GCAddLoadingAC } from "Modules/StateManagement/Genux/Actions/Connected/GCAddLoading/GCAddLoadingAC";
import { GCApiSuccessAC } from "Modules/StateManagement/Genux/Actions/Connected/GCApiSuccess/GCApiSuccessAC";
import { GCApiErrorAC } from "Modules/StateManagement/Genux/Actions/Connected/GCApiError/GCApiErrorAC";
import { logoutF } from "Modules/Auth/API/logoutF";
import { GDApiSuccessAC } from "Modules/StateManagement/Genux/Actions/Data/GDApiSuccess/GDApiSuccessAC";
import { Undefinedable } from "Modules/StateManagement/Genux/_Interfaces/Undefinedable";
import { User } from "Modules/Auth/_Interfaces/User";
import { getError } from "_Helpers/getError";

export const useLogoutSHC = ({
  authStores: {
    user: [, userDispatch],
    logout: [, logoutDispatch],
  },
}: GlobalStores): AuthSH["logout"] =>
  useCallback(
    async (onSuccess, onError) => {
      try {
        logoutDispatch(GCAddLoadingAC({ connectedId: 1 }));

        await logoutF();

        userDispatch(
          GDApiSuccessAC<undefined, Undefinedable<User>>({
            data: undefined,
            param: undefined,
          })
        );

        logoutDispatch(GCApiSuccessAC({ connectedId: 1 }));

        onSuccess && onSuccess();
      } catch (er) {
        const error = getError(er);

        logoutDispatch(GCApiErrorAC({ error: { ...error, connectedId: 1 } }));

        onError && onError(error);
      }
    },
    [userDispatch, logoutDispatch]
  );
