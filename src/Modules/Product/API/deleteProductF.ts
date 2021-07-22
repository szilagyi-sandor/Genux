// CHECKED 1.0
import { createAsyncTO } from "_Helpers/createAsyncTO";
import { DeleteProductParam } from "./_Interfaces/DeleteProductParam";
import { mockedProducts } from "./_mock";

export const deleteProductF = async ({ id }: DeleteProductParam) => {
  console.info("deleteProductF called");

  await createAsyncTO(1500);

  const index = mockedProducts.findIndex((p) => p.id === id);

  if (index === -1) {
    throw new Error("Not found.");
  }

  mockedProducts.splice(index, 1);
};
