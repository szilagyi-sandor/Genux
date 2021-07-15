import { createAsyncTO } from "_Helpers/createAsyncTO";
import { productStatuses } from "../_Constants/productStatuses";
import { ModifyProductStatusParam } from "./_Interfaces/ModifyProductStatusParam";
import { mockedProducts } from "./_mock";

export const modifyProductStatusF = async ({
  id,
  status,
}: ModifyProductStatusParam) => {
  console.log("modifyProductStatusF called");
  await createAsyncTO(1500);

  if (
    status !== productStatuses.accepted.id &&
    status !== productStatuses.rejected.id
  ) {
    throw new Error("Invalid status.");
  }

  const product = mockedProducts.find((p) => p.id === id);

  if (!product) {
    throw new Error("Not found.");
  }

  product.status = status;
};
