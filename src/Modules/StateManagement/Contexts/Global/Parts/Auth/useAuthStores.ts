// CHECKED 1.0
import { LoginParam } from "Modules/Auth/API/_Interfaces/LoginParam";
import { User } from "Modules/Auth/_Interfaces/User";
import { useGCReducer } from "Modules/StateManagement/Genux/Hooks/useGenuxConnectedReducer";
import { useGDReducer } from "Modules/StateManagement/Genux/Hooks/useGenuxDataReducer";
import { Undefinedable } from "Modules/StateManagement/Genux/_Interfaces/Undefinedable";
import { AuthStores } from "./interfaces";

export const useAuthStores = (): AuthStores => ({
  user: useGDReducer<undefined, Undefinedable<User>>(undefined),
  login: useGCReducer<LoginParam>(),
  logout: useGCReducer(),
});
