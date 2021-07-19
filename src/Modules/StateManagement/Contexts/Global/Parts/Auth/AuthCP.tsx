// CHECKED 1.0
import React, { PropsWithChildren, useEffect } from "react";

import { AuthCPProps } from "./interfaces";
import { userContexts } from "./Parts/userContexts";
import { authApiCallersContext } from "./Parts/authApiCallersContext";
import { loginContexts } from "./Parts/loginContexts";
import { logoutContexts } from "./Parts/logoutContexts";
import ContextComposer from "Modules/StateManagement/Genux/Components/ContextComposer/ContextComposer";
import { cx4 } from "Modules/StateManagement/Genux/Components/ContextComposer/_Helpers/createComposedContextComponents";
import { GDManageLoadingAC } from "Modules/StateManagement/Genux/Actions/Data/GDManageLoading/GDManageLoadingAC";
import { User } from "Modules/Auth/_Interfaces/User";
import { loginParamLocalStorageName } from "Modules/Auth/_Constants/loginParamLocalStorageName";
import { getUserF } from "Modules/Auth/API/getUserF";
import { GDApiSuccessAC } from "Modules/StateManagement/Genux/Actions/Data/GDApiSuccess/GDApiSuccessAC";
import { Undefinedable } from "Modules/StateManagement/Genux/_Interfaces/Undefinedable";
import { GDApiErrorAC } from "Modules/StateManagement/Genux/Actions/Data/GDApiError/GDApiErrorAC";
import { getError } from "_Helpers/getError";

export const AuthCP = ({
  authStores,
  authApiCallers,
  children,
}: PropsWithChildren<AuthCPProps>) => {
  const {
    user: [userState, userDispatch],
    login: [loginState, loginDispatch],
    logout: [logoutState, logoutDispatch],
  } = authStores;

  // CPs can make inital calls.
  useEffect(() => {
    const handleUserInit = async () => {
      try {
        userDispatch(GDManageLoadingAC(true));

        let user: User | undefined = undefined;
        const credentials = localStorage.getItem(loginParamLocalStorageName);

        if (credentials) {
          const parsedCreds = JSON.parse(credentials);

          user = await getUserF({
            password: parsedCreds.password || "",
            username: parsedCreds.username || "",
          });
        }

        userDispatch(
          GDApiSuccessAC<undefined, Undefinedable<User>>({
            data: user,
            param: undefined,
          })
        );
      } catch (error) {
        userDispatch(
          GDApiErrorAC({
            error: getError(error),
            param: undefined,
          })
        );
      }
    };

    handleUserInit();
  }, [userDispatch]);

  return (
    <ContextComposer
      contexts={[
        cx4(userContexts.state, userState, !userState.dataRecieved),
        cx4(userContexts.dispatch, userDispatch),

        cx4(loginContexts.state, loginState),
        cx4(loginContexts.dispatch, loginDispatch),

        cx4(logoutContexts.state, logoutState),
        cx4(logoutContexts.dispatch, logoutDispatch),

        cx4(authApiCallersContext, authApiCallers),
      ]}
    >
      {children}
    </ContextComposer>
  );
};
