// CHECKED 1.0
import { useContext } from "react";

import { createGDContextPair } from "Modules/StateManagement/Genux/_Helpers/createGDContextPair";
import { GetProductDetailsParam } from "Modules/Product/API/_Interfaces/GetProductDetailsParam";
import { Product } from "Modules/Product/_Interfaces/Product";
import { Undefinedable } from "Modules/StateManagement/Genux/_Interfaces/Undefinedable";

export const productDetailsContexts = createGDContextPair<
  GetProductDetailsParam,
  Undefinedable<Product>
>(undefined);

export const useProductDetailsSC = () =>
  useContext(productDetailsContexts.state);

export const useProductDetailsDC = () =>
  useContext(productDetailsContexts.dispatch);
