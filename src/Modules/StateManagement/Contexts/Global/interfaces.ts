import { AuthApiCallers, AuthStores } from "./Parts/Auth/interfaces";
import { ProductApiCallers, ProductStores } from "./Parts/Product/interfaces";

export interface GlobalStores {
  authStores: AuthStores;
  productStores: ProductStores;
}

export interface GlobalApiCallers {
  authApiCallers: AuthApiCallers;
  productApiCallers: ProductApiCallers;
}
