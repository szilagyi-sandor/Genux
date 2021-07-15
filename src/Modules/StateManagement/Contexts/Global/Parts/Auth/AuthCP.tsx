import React, { PropsWithChildren, useEffect } from "react";

import { AuthCPProps } from "./interfaces";
import { getUserF } from "../../../../../Auth/API/getUserF";
import { userContexts } from "./Parts/userContexts";
import { User } from "../../../../../Auth/_Interfaces/User";
import { GDManageLoadingAC } from "../../../../Genux/Actions/Data/GDManageLoading/GDManageLoadingAC";
import { GDApiSuccessAC } from "../../../../Genux/Actions/Data/GDApiSuccess/GDApiSuccessAC";
import { GDApiErrorAC } from "../../../../Genux/Actions/Data/GDApiError/GDApiErrorAC";
import { authApiCallersContext } from "./Parts/authApiCallersContext";
import { loginParamLocalStorageName } from "../../../../../Auth/_Constants/loginParamLocalStorageName";
import { getError } from "../../../../../../_Helpers/getError";
import { Undefinedable } from "../../../../Genux/_Interfaces/Undefinedable";
import { loginContexts } from "./Parts/loginContexts";
import { logoutContexts } from "./Parts/logoutContexts";
import ContextComposer from "Modules/StateManagement/Genux/Components/ContextComposer/ContextComposer";
import { cx4 } from "Modules/StateManagement/Genux/Components/ContextComposer/_Helpers/createComposedContextComponents";

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

        // Setting user.
        userDispatch(
          GDApiSuccessAC<undefined, Undefinedable<User>>({
            data: user,
            param: undefined,
          })
        );
      } catch (error) {
        // Setting user error.
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
