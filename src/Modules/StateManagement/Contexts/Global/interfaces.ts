// CHECKED 1.0
import { AuthApiCallers, AuthStores } from "./Parts/Auth/interfaces";
import { ProductApiCallers, ProductStores } from "./Parts/Product/interfaces";

// Stores and Api callers are built with a parent-child connection.
export interface GlobalStores {
  authStores: AuthStores;
  productStores: ProductStores;
}

export interface GlobalApiCallers {
  authApiCallers: AuthApiCallers;
  productApiCallers: ProductApiCallers;
}
