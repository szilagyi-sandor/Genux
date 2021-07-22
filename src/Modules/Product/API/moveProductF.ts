// CHECKED 1.0
import { createAsyncTO } from "_Helpers/createAsyncTO";
import { productReorderTypes } from "../_Constants/productReorderTypes";
import { MoveProductParam } from "./_Interfaces/MoveProductParam";
import { mockedProducts } from "./_mock";

export const moveProductF = async ({ id, reorderType }: MoveProductParam) => {
  console.info("moveProductF called");

  await createAsyncTO(1500);

  if (
    reorderType !== productReorderTypes.moveDown.id &&
    reorderType !== productReorderTypes.moveUp.id
  ) {
    throw new Error("Invalid reorder type.");
  }

  const index = mockedProducts.findIndex((p) => p.id === id);

  if (index === -1) {
    throw new Error("Not found.");
  }

  if (index === 0 && reorderType === productReorderTypes.moveUp.id) {
    throw new Error("Invalid request.");
  }

  if (
    index === mockedProducts.length - 1 &&
    reorderType === productReorderTypes.moveDown.id
  ) {
    throw new Error("Invalid request.");
  }

  const targetItem = mockedProducts[index];
  let connectedIndex: number;

  if (reorderType === productReorderTypes.moveDown.id) {
    connectedIndex = index + 1;
  } else {
    connectedIndex = index - 1;
  }

  let connectedItem = mockedProducts[connectedIndex];

  mockedProducts[index] = connectedItem;
  mockedProducts[connectedIndex] = targetItem;
};
