import { GlobalStores } from "./interfaces";
import { useAuthStores } from "./Parts/Auth/authStores";
import { useProductStores } from "./Parts/Product/productStores";

export const useGlobalStores = (): GlobalStores => ({
  authStores: useAuthStores(),
  productStores: useProductStores(),
});
