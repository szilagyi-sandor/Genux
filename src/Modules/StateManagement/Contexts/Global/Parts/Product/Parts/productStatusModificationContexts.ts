// CHECKED 1.0
import { useContext } from "react";

import { createGCContextPair } from "Modules/StateManagement/Genux/_Helpers/createGCContextPair";
import { ModifyProductStatusParam } from "Modules/Product/API/_Interfaces/ModifyProductStatusParam";

export const productStatusModificationContexts =
  createGCContextPair<ModifyProductStatusParam>();

export const useProductStatusModificationSC = () =>
  useContext(productStatusModificationContexts.state);

export const useProductStatusModificationDC = () =>
  useContext(productStatusModificationContexts.dispatch);
