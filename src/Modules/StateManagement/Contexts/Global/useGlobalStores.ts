// CHECKED 1.0
import { GlobalStores } from "./interfaces";
import { useAuthStores } from "./Parts/Auth/useAuthStores";
import { useProductStores } from "./Parts/Product/useProductStores";

export const useGlobalStores = (): GlobalStores => ({
  authStores: useAuthStores(),
  productStores: useProductStores(),
});
