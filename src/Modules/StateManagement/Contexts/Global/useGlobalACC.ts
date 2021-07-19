// CHECKED 1.0
import { GlobalApiCallers, GlobalStores } from "./interfaces";
import { useAuthACC } from "./Parts/Auth/useAuthACC";
import { useProductACC } from "./Parts/Product/useProductACC";

export const useGlobalACC = (stores: GlobalStores): GlobalApiCallers => ({
  authApiCallers: useAuthACC(stores),
  productApiCallers: useProductACC(stores),
});
