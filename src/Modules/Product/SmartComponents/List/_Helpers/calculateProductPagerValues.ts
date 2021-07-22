// CHECKED 1.0
import { ListProductsParam } from "Modules/Product/API/_Interfaces/ListProductsParam";
import { Product } from "Modules/Product/_Interfaces/Product";
import { Undefinedable } from "Modules/StateManagement/Genux/_Interfaces/Undefinedable";
import { PagedItems } from "_Interfaces/PagedItems";

export const calculateProductPagerValues = (
  data: Undefinedable<PagedItems<Product>>,
  param: Undefinedable<ListProductsParam>
) => ({
  pageCount:
    data && param ? Math.max(Math.ceil(data.totalCount / param.take), 1) : 1,
  currentPage: param ? Math.ceil(param.skip / param.take + 1) : 1,
});
