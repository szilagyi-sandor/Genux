import { AuthApiCallers } from "./interfaces";

import { useLoginACC } from "./AuthACCs/useLoginACC";
import { useLogoutACC } from "./AuthACCs/useLogoutACC";
import { GlobalStores } from "../../interfaces";

export const useAuthACC = (stores: GlobalStores): AuthApiCallers => ({
  login: useLoginACC(stores),
  logout: useLogoutACC(stores),
});
