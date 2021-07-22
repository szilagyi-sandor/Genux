// CHECKED 1.0
import { createContext, useContext } from "react";

import { AuthSH } from "../interfaces";
import { defaultASH as df } from "Modules/StateManagement/Genux/StateHandlers/_Constants/defaultAsyncStateHandler";

export const authSHContext = createContext<AuthSH>({
  login: df,
  logout: df,
});

export const useAuthSH = () => useContext(authSHContext);
