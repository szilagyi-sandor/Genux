// CHECKED 1.0
import { AuthSH, AuthStores } from "./Parts/Auth/interfaces";
import { ProductSH, ProductStores } from "./Parts/Product/interfaces";

// Stores and stateHandlers are built with a parent-child connection.
export interface GlobalStores {
  authStores: AuthStores;
  productStores: ProductStores;
}

export interface GlobalSH {
  authSH: AuthSH;
  productSH: ProductSH;
}
