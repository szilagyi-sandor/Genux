import { LoginParam } from "Modules/Auth/API/_Interfaces/LoginParam";
import { createGCContextPair } from "Modules/StateManagement/Genux/_Helpers/createGCContextPair";
import { useContext } from "react";

export const loginContexts = createGCContextPair<LoginParam>();

export const useLoginSC = () => useContext(loginContexts.state);

export const useLoginDC = () => useContext(loginContexts.dispatch);
