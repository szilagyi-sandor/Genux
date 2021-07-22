// CHECKED 1.0
import { GlobalSH, GlobalStores } from "./interfaces";
import { useAuthSHC } from "./Parts/Auth/useAuthSHC";
import { useProductSHC } from "./Parts/Product/useProductSHC";

export const useGlobalSHC = (stores: GlobalStores): GlobalSH => ({
  authSH: useAuthSHC(stores),
  productSH: useProductSHC(stores),
});
