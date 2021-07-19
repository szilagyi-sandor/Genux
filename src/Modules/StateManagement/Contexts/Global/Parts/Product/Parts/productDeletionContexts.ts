// CHECKED 1.0
import { useContext } from "react";

import { DeleteProductParam } from "Modules/Product/API/_Interfaces/DeleteProductParam";
import { createGCContextPair } from "Modules/StateManagement/Genux/_Helpers/createGCContextPair";

export const productDeletionContexts =
  createGCContextPair<DeleteProductParam>();

export const useProductDeletionSC = () =>
  useContext(productDeletionContexts.state);

export const useProductDeletionDC = () =>
  useContext(productDeletionContexts.dispatch);
