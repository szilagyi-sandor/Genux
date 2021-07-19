import { useCallback, useRef } from "react";

import { listProductsF } from "Modules/Product/API/listProductsF";
import { GDApiErrorAC } from "Modules/StateManagement/Genux/Actions/Data/GDApiError/GDApiErrorAC";
import { GDApiSuccessAC } from "Modules/StateManagement/Genux/Actions/Data/GDApiSuccess/GDApiSuccessAC";
import { GDManageLoadingAC } from "Modules/StateManagement/Genux/Actions/Data/GDManageLoading/GDManageLoadingAC";
import { getError } from "_Helpers/getError";
import { GlobalStores } from "../../../interfaces";
import { ProductApiCallers } from "../interfaces";
import { GDSetDataAC } from "Modules/StateManagement/Genux/Actions/Data/GDSetData/GDSetDataAC";
import { GDSetErrorAC } from "Modules/StateManagement/Genux/Actions/Data/GDSetError/GDSetErrorAC";

export const useListProductsACC = ({
  productStores: {
    list: [, listDispatch],
  },
}: GlobalStores): ProductApiCallers["listProducts"] => {
  // This a advanced example, where we are letting this function to be called multiple times.
  // The right usage would be simply cancel + return when the call is not the last one. In that case
  // we would not need to keep track of calls in the component too.
  const runningCounter = useRef(0);

  return useCallback(
    async (param, onSuccess, onError) => {
      const order = runningCounter.current + 1;
      runningCounter.current = order;

      try {
        listDispatch(GDManageLoadingAC(true));

        const products = await listProductsF(param);

        listDispatch(
          runningCounter.current === order
            ? GDApiSuccessAC({
                data: products,
                param,
              })
            : GDSetDataAC({
                data: products,
                param,
              })
        );

        onSuccess && onSuccess(products);
      } catch (er) {
        const error = getError(er);

        listDispatch(
          runningCounter.current === order
            ? GDApiErrorAC({
                error: error,
                param,
              })
            : GDSetErrorAC({ error: error, param })
        );

        onError && onError(error);
      }
    },
    [listDispatch]
  );
};
