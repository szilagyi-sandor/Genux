// CHECKED 1.0
import { useCallback } from "react";

import { AuthApiCallers } from "../interfaces";
import { GCAddLoadingAC } from "Modules/StateManagement/Genux/Actions/Connected/GCAddLoading/GCAddLoadingAC";
import { GDSetDataAC } from "Modules/StateManagement/Genux/Actions/Data/GDSetData/GDSetDataAC";
import { GCApiSuccessAC } from "Modules/StateManagement/Genux/Actions/Connected/GCApiSuccess/GCApiSuccessAC";
import { GCApiErrorAC } from "Modules/StateManagement/Genux/Actions/Connected/GCApiError/GCApiErrorAC";
import { GlobalStores } from "../../../interfaces";
import { loginF } from "Modules/Auth/API/loginF";
import { Undefinedable } from "Modules/StateManagement/Genux/_Interfaces/Undefinedable";
import { User } from "Modules/Auth/_Interfaces/User";
import { getError } from "_Helpers/getError";
import { LoginParam } from "Modules/Auth/API/_Interfaces/LoginParam";

export const useLoginACC = ({
  authStores: {
    user: [, userDispatch],
    login: [, loginDispatch],
  },
}: GlobalStores): AuthApiCallers["login"] =>
  useCallback(
    async (param, onSuccess, onError) => {
      try {
        loginDispatch(GCAddLoadingAC({ connectedId: 1 }));

        const user = await loginF(param);

        userDispatch(
          GDSetDataAC<undefined, Undefinedable<User>>({
            data: user,
            param: undefined,
          })
        );

        loginDispatch(
          GCApiSuccessAC<LoginParam>({
            connectedId: 1,
            param: { value: undefined },
          })
        );

        onSuccess && onSuccess(user);
      } catch (er) {
        const error = getError(er);

        loginDispatch(GCApiErrorAC({ error: { ...error, connectedId: 1 } }));

        onError && onError(error);
      }
    },
    [userDispatch, loginDispatch]
  );
