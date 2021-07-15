import { ListProductsParam } from "Modules/Product/API/_Interfaces/ListProductsParam";
import { Product } from "Modules/Product/_Interfaces/Product";
import { createAsyncTO } from "_Helpers/createAsyncTO";
import { PagedItems } from "_Interfaces/PagedItems";
import { mockedProducts } from "./_mock";

export const listProductsF = async (
  param: ListProductsParam
): Promise<PagedItems<Product>> => {
  console.log("listProductsF called");
  const { skip, take, search } = param;

  const _mockedProducts = mockedProducts.map((p) => ({ ...p }));
  await createAsyncTO(3000);

  let items = _mockedProducts.filter(
    (item) => !search || (item.name && item.name.includes(search))
  );

  items = _mockedProducts.filter(
    (_, index) => index >= skip && index < skip + take
  );

  const products: PagedItems<Product> = {
    skip,
    take,
    totalCount: 6,
    items: items,
  };

  return products;
};
