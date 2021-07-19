// CHECKED 1.0
import { LoginParam } from "Modules/Auth/API/_Interfaces/LoginParam";
import { User } from "Modules/Auth/_Interfaces/User";
import { useGenuxConnectedReducer } from "Modules/StateManagement/Genux/Hooks/useGCReducer";
import { useGenuxDataReducer } from "Modules/StateManagement/Genux/Hooks/useGDReducer";
import { Undefinedable } from "Modules/StateManagement/Genux/_Interfaces/Undefinedable";
import { AuthStores } from "./interfaces";

export const useAuthStores = (): AuthStores => ({
  user: useGenuxDataReducer<undefined, Undefinedable<User>>(undefined),
  login: useGenuxConnectedReducer<LoginParam>(),
  logout: useGenuxConnectedReducer(),
});
