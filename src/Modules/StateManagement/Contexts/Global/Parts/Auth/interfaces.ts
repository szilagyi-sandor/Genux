// CHECKED 1.0
import { LoginParam } from "Modules/Auth/API/_Interfaces/LoginParam";
import { User } from "Modules/Auth/_Interfaces/User";
import { SH } from "Modules/StateManagement/Genux/StateHandlers/_Interfaces/Basic/StateHandler";
import { SSH } from "Modules/StateManagement/Genux/StateHandlers/_Interfaces/Simple/SimpleStateHandler";
import { GCStore } from "Modules/StateManagement/Genux/_Interfaces/GenuxConnectedStore";
import { GDStore } from "Modules/StateManagement/Genux/_Interfaces/GenuxDataStore";
import { Undefinedable } from "Modules/StateManagement/Genux/_Interfaces/Undefinedable";

export type AuthStores = {
  user: GDStore<undefined, Undefinedable<User>>;
  login: GCStore<LoginParam>;
  logout: GCStore;
};

export interface AuthSH {
  login: SH<LoginParam, Undefinedable<User>>;
  logout: SSH;
}

export interface AuthCPProps {
  authStores: AuthStores;
  authSH: AuthSH;
}
