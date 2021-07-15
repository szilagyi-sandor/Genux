import { useCallback } from "react";

import { AuthApiCallers } from "../interfaces";
import { GlobalStores } from "../../../interfaces";
import { loginF } from "../../../../../../Auth/API/loginF";
import { getError } from "../../../../../../../_Helpers/getError";
import { Undefinedable } from "../../../../../Genux/_Interfaces/Undefinedable";
import { User } from "../../../../../../Auth/_Interfaces/User";
import { GCAddLoadingAC } from "Modules/StateManagement/Genux/Actions/Connected/GCAddLoading/GCAddLoadingAC";
import { GDSetDataAC } from "Modules/StateManagement/Genux/Actions/Data/GDSetData/GDSetDataAC";
import { GCApiSuccessAC } from "Modules/StateManagement/Genux/Actions/Connected/GCApiSuccess/GCApiSuccessAC";
import { GCApiErrorAC } from "Modules/StateManagement/Genux/Actions/Connected/GCApiError/GCApiErrorAC";

export const useLoginACC = ({
  authStores: {
    user: [, userDispatch],
    login: [, loginDispatch],
  },
}: GlobalStores): AuthApiCallers["login"] =>
  useCallback(
    async (param, onSuccess, onError) => {
      try {
        loginDispatch(GCAddLoadingAC(param.username));

        const user = await loginF(param);

        userDispatch(
          GDSetDataAC<undefined, Undefinedable<User>>({
            data: user,
            param: undefined,
          })
        );

        loginDispatch(GCApiSuccessAC(param.username));

        onSuccess && onSuccess(user);
      } catch (error) {
        const _error = getError(error);

        loginDispatch(GCApiErrorAC({ ..._error, connectedId: param.username }));
        onError && onError(_error);
      }
    },
    [userDispatch, loginDispatch]
  );
