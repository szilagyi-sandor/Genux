// CHECKED 1.0
import { useContext } from "react";

import { User } from "Modules/Auth/_Interfaces/User";
import { createGDContextPair } from "Modules/StateManagement/Genux/_Helpers/createGDContextPair";
import { Undefinedable } from "Modules/StateManagement/Genux/_Interfaces/Undefinedable";

export const userContexts = createGDContextPair<undefined, Undefinedable<User>>(
  undefined
);

export const useUserSC = () => useContext(userContexts.state);

export const useUserDC = () => useContext(userContexts.dispatch);
