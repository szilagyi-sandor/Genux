// CHECKED 1.0
import { createContext, useContext } from "react";

import { ProductSH } from "../interfaces";
import { defaultASH as df } from "Modules/StateManagement/Genux/StateHandlers/_Constants/defaultAsyncStateHandler";

export const productSHContext = createContext<ProductSH>({
  listProducts: df,
  getProductDetails: df,
  modifyProductStatus: df,
  moveProduct: df,
  deleteProduct: df,
});

export const useProductSH = () => useContext(productSHContext);
