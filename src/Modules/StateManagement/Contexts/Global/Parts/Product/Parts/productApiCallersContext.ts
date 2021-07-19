// CHECKED 1.0
import { createContext, useContext } from "react";

import { defaultApiCaller as df } from "../../../../../Genux/ApiCallers/_Constants/defaultApiCaller";
import { ProductApiCallers } from "../interfaces";

export const productApiCallersContext = createContext<ProductApiCallers>({
  listProducts: df,
  getProductDetails: df,
  modifyProductStatus: df,
  moveProduct: df,
  deleteProduct: df,
});

export const useProductApiCallers = () => useContext(productApiCallersContext);
