// CHECKED 1.0
import { useCallback, useRef } from "react";

import { GlobalStores } from "../../../interfaces";
import { ProductSH } from "../interfaces";
import { GDManageLoadingAC } from "Modules/StateManagement/Genux/Actions/Data/GDManageLoading/GDManageLoadingAC";
import { getProductDetailsF } from "Modules/Product/API/getProductDetailsF";
import { GDApiSuccessAC } from "Modules/StateManagement/Genux/Actions/Data/GDApiSuccess/GDApiSuccessAC";
import { getError } from "_Helpers/getError";
import { GDApiErrorAC } from "Modules/StateManagement/Genux/Actions/Data/GDApiError/GDApiErrorAC";

export const useGetProductDetailsSHC = ({
  productStores: {
    details: [, detailsDispatch],
  },
}: GlobalStores): ProductSH["getProductDetails"] => {
  // This is an example to prevent multiple calls at the same time.
  const isRunning = useRef(false);

  return useCallback(
    async (param, onSuccess, onError) => {
      try {
        if (isRunning.current) {
          return;
        }

        isRunning.current = true;

        detailsDispatch(GDManageLoadingAC(true));

        const product = await getProductDetailsF(param);

        detailsDispatch(
          GDApiSuccessAC({
            data: product,
            param,
          })
        );

        onSuccess && onSuccess(product);

        isRunning.current = false;
      } catch (er) {
        const error = getError(er);

        detailsDispatch(
          GDApiErrorAC({
            error: error,
            param,
          })
        );

        onError && onError(error);

        isRunning.current = false;
      }
    },
    [detailsDispatch]
  );
};
