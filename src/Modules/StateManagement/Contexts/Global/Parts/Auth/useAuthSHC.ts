// CHECKED 1.0
import { AuthSH } from "./interfaces";
import { useLoginSHC } from "./AuthSHC/useLoginSHC";
import { useLogoutSHC } from "./AuthSHC/useLogoutSHC";
import { GlobalStores } from "../../interfaces";

export const useAuthSHC = (stores: GlobalStores): AuthSH => ({
  login: useLoginSHC(stores),
  logout: useLogoutSHC(stores),
});
