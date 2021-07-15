import { createContext, useContext } from "react";

import { defaultApiCaller as df } from "../../../../../Genux/ApiCallers/_Constants/defaultApiCaller";
import { AuthApiCallers } from "../interfaces";

export const authApiCallersContext = createContext<AuthApiCallers>({
  login: df,
  logout: df,
});

export const useAuthApiCallers = () => useContext(authApiCallersContext);
