import { useCallback, useRef } from "react";

import { GlobalStores } from "../../../interfaces";
import { ProductApiCallers } from "../interfaces";
import { GDManageLoadingAC } from "Modules/StateManagement/Genux/Actions/Data/GDManageLoading/GDManageLoadingAC";
import { getProductDetailsF } from "Modules/Product/API/getProductDetailsF";
import { GDApiSuccessAC } from "Modules/StateManagement/Genux/Actions/Data/GDApiSuccess/GDApiSuccessAC";
import { getError } from "_Helpers/getError";
import { GDApiErrorAC } from "Modules/StateManagement/Genux/Actions/Data/GDApiError/GDApiErrorAC";

export const useGetProductDetailsACC = ({
  productStores: {
    details: [, detailsDispatch],
  },
}: GlobalStores): ProductApiCallers["getProductDetails"] => {
  const isRunning = useRef(false);

  return useCallback(
    async (param, onSuccess, onError) => {
      if (isRunning.current) {
        return;
      }
      isRunning.current = true;

      try {
        detailsDispatch(GDManageLoadingAC(true));

        const product = await getProductDetailsF(param);

        detailsDispatch(
          GDApiSuccessAC({
            data: product,
            param,
          })
        );

        onSuccess && onSuccess(product);
      } catch (error) {
        const _error = getError(error);

        detailsDispatch(
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
    [detailsDispatch]
  );
};
