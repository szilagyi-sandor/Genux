// CHECKED 1.0
import { useContext } from "react";

import { ListProductsParam } from "Modules/Product/API/_Interfaces/ListProductsParam";
import { Product } from "Modules/Product/_Interfaces/Product";
import { createGDContextPair } from "Modules/StateManagement/Genux/_Helpers/createGDContextPair";
import { Undefinedable } from "Modules/StateManagement/Genux/_Interfaces/Undefinedable";
import { PagedItems } from "_Interfaces/PagedItems";

export const productListContexts = createGDContextPair<
  ListProductsParam,
  Undefinedable<PagedItems<Product>>
>(undefined);

export const useProductListSC = () => useContext(productListContexts.state);

export const useProductListDC = () => useContext(productListContexts.dispatch);
