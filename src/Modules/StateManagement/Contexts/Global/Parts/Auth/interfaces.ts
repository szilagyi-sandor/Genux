// CHECKED 1.0
import { LoginParam } from "Modules/Auth/API/_Interfaces/LoginParam";
import { User } from "Modules/Auth/_Interfaces/User";
import { ApiCaller } from "Modules/StateManagement/Genux/ApiCallers/_Interfaces/ApiCaller";
import { SimpleApiCaller } from "Modules/StateManagement/Genux/ApiCallers/_Interfaces/SimpleApiCaller";
import { GCStore } from "Modules/StateManagement/Genux/_Interfaces/GenuxConnectedStore";
import { GDStore } from "Modules/StateManagement/Genux/_Interfaces/GenuxDataStore";
import { Undefinedable } from "Modules/StateManagement/Genux/_Interfaces/Undefinedable";

export type AuthStores = {
  user: GDStore<undefined, Undefinedable<User>>;
  login: GCStore<LoginParam>;
  logout: GCStore;
};

export interface AuthApiCallers {
  login: ApiCaller<LoginParam, Undefinedable<User>>;
  logout: SimpleApiCaller;
}

export interface AuthCPProps {
  authStores: AuthStores;
  authApiCallers: AuthApiCallers;
}
