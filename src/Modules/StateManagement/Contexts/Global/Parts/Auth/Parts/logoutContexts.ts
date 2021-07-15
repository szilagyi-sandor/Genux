import { useContext } from "react";

import { createGCContextPair } from "Modules/StateManagement/Genux/_Helpers/createGCContextPair";

export const logoutContexts = createGCContextPair();

export const useLogoutSC = () => useContext(logoutContexts.state);

export const useLogoutDC = () => useContext(logoutContexts.dispatch);
