// CHECKED 1.0
import { ListProductsParam } from "Modules/Product/API/_Interfaces/ListProductsParam";
import { Product } from "Modules/Product/_Interfaces/Product";
import { createAsyncTO } from "_Helpers/createAsyncTO";
import { PagedItems } from "_Interfaces/PagedItems";
import { mockedProducts } from "./_mock";

export const listProductsF = async (
  param: ListProductsParam
): Promise<PagedItems<Product>> => {
  console.info("listProductsF called");

  const { skip, take, search } = param;

  const _mockedProducts = mockedProducts.map((p) => ({ ...p }));

  await createAsyncTO(2000);

  let items = _mockedProducts.filter(
    (item) => !search || item.name?.includes(search)
  );

  const totalCount = items.length;

  items = items.filter((_, index) => index >= skip && index < skip + take);

  return {
    skip,
    take,
    totalCount: totalCount,
    items: items,
  };
};
