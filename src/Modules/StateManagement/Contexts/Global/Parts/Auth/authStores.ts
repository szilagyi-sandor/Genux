import { LoginParam } from "Modules/Auth/API/_Interfaces/LoginParam";
import { useGenuxConnectedReducer } from "Modules/StateManagement/Genux/Hooks/useGCReducer";
import { User } from "../../../../../Auth/_Interfaces/User";
import { useGenuxDataReducer } from "../../../../Genux/Hooks/useGDReducer";
import { Undefinedable } from "../../../../Genux/_Interfaces/Undefinedable";
import { AuthStores } from "./interfaces";

export const useAuthStores = (): AuthStores => ({
  user: useGenuxDataReducer<undefined, Undefinedable<User>>(undefined),
  login: useGenuxConnectedReducer<LoginParam>(),
  logout: useGenuxConnectedReducer(),
});
