import { useContext } from "react";

import { createGCContextPair } from "Modules/StateManagement/Genux/_Helpers/createGCContextPair";
import { MoveProductParam } from "Modules/Product/API/_Interfaces/MoveProductParam";

export const productMovementContexts = createGCContextPair<MoveProductParam>();

export const useProductMovementSC = () =>
  useContext(productMovementContexts.state);

export const useProductMovementDC = () =>
  useContext(productMovementContexts.dispatch);
