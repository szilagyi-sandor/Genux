import { useContext } from "react";

import { User } from "../../../../../../Auth/_Interfaces/User";
import { createGDContextPair } from "../../../../../Genux/_Helpers/createGDContextPair";
import { Undefinedable } from "../../../../../Genux/_Interfaces/Undefinedable";

export const userContexts = createGDContextPair<undefined, Undefinedable<User>>(
  undefined
);

export const useUserSC = () => useContext(userContexts.state);

export const useUserDC = () => useContext(userContexts.dispatch);
