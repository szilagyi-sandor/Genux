import { createAsyncTO } from "_Helpers/createAsyncTO";
import { Product } from "../_Interfaces/Product";
import { GetProductDetailsParam } from "./_Interfaces/GetProductDetailsParam";
import { mockedProducts } from "./_mock";

export const getProductDetailsF = async ({
  id,
}: GetProductDetailsParam): Promise<Product> => {
  console.log("getProductDetailsF called");
  await createAsyncTO(2000);

  const product = mockedProducts.find((item) => item.id === id);

  if (!product) {
    throw new Error("Not found.");
  }

  return product;
};
