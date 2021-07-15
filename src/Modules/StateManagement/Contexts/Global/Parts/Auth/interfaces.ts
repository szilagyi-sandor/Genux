import { GCStore } from "Modules/StateManagement/Genux/_Interfaces/GenuxConnectedStore";
import { LoginParam } from "../../../../../Auth/API/_Interfaces/LoginParam";
import { User } from "../../../../../Auth/_Interfaces/User";
import { ApiCaller } from "../../../../Genux/ApiCallers/_Interfaces/ApiCaller";
import { SimpleApiCaller } from "../../../../Genux/ApiCallers/_Interfaces/SimpleApiCaller";
import { GDStore } from "../../../../Genux/_Interfaces/GenuxDataStore";
import { Undefinedable } from "../../../../Genux/_Interfaces/Undefinedable";

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
