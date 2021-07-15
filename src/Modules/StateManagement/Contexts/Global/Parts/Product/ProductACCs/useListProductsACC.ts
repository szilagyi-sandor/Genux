import { useCallback, useRef } from "react";

import { listProductsF } from "Modules/Product/API/listProductsF";
import { GDApiErrorAC } from "Modules/StateManagement/Genux/Actions/Data/GDApiError/GDApiErrorAC";
import { GDApiSuccessAC } from "Modules/StateManagement/Genux/Actions/Data/GDApiSuccess/GDApiSuccessAC";
import { GDManageLoadingAC } from "Modules/StateManagement/Genux/Actions/Data/GDManageLoading/GDManageLoadingAC";
import { getError } from "_Helpers/getError";
import { GlobalStores } from "../../../interfaces";
import { ProductApiCallers } from "../interfaces";

export const useListProductsACC = ({
  productStores: {
    list: [, listDispatch],
  },
}: GlobalStores): ProductApiCallers["listProducts"] => {
  const isRunning = useRef(false);

  return useCallback(
    async (param, onSuccess, onError) => {
      if (isRunning.current) {
        return;
      }

      isRunning.current = true;

      try {
        listDispatch(GDManageLoadingAC(true));

        const products = await listProductsF(param);

        listDispatch(
          GDApiSuccessAC({
            data: products,
            param,
          })
        );

        onSuccess && onSuccess(products);
      } catch (error) {
        const _error = getError(error);

        listDispatch(
          GDApiErrorAC({
            error: _error,
            param,
          })
        );

        onError && onError(_error);
      } finally {
        isRunning.current = false;
      }
    },
    [listDispatch]
  );
};
