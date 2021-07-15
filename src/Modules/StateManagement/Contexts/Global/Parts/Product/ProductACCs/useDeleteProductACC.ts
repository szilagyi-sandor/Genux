import { useCallback } from "react";

import { listProductsF } from "Modules/Product/API/listProductsF";
import { defaultProductListParam } from "Modules/Product/_Constants/defaultProductListParam";
import { GCAddLoadingAC } from "Modules/StateManagement/Genux/Actions/Connected/GCAddLoading/GCAddLoadingAC";
import { GCApiErrorAC } from "Modules/StateManagement/Genux/Actions/Connected/GCApiError/GCApiErrorAC";
import { GCApiSuccessAC } from "Modules/StateManagement/Genux/Actions/Connected/GCApiSuccess/GCApiSuccessAC";
import { GDRefreshDataAC } from "Modules/StateManagement/Genux/Actions/Data/GDRefreshData/GDRefreshDataAC";
import { getError } from "_Helpers/getError";
import { GlobalStores } from "../../../interfaces";
import { ProductApiCallers } from "../interfaces";
import { deleteProductF } from "Modules/Product/API/deleteProductF";

export const useDeleteProductACC = ({
  productStores: {
    list: [listState, listDispatch],
    details: [detailsState, detailsDispatch],
    delete: [, deletionDispatch],
  },
}: GlobalStores): ProductApiCallers["deleteProduct"] =>
  useCallback(
    async (param, onSuccess, onError) => {
      try {
        deletionDispatch(GCAddLoadingAC(param.id));

        await deleteProductF(param);
        const products = await listProductsF(
          listState.param || defaultProductListParam
        );
        listDispatch(GDRefreshDataAC(products));

        if (
          detailsState.latestParam &&
          detailsState.latestParam.id === param.id
        ) {
          detailsDispatch(GDRefreshDataAC(undefined));
        }

        deletionDispatch(GCApiSuccessAC(param.id));

        onSuccess && onSuccess();
      } catch (error) {
        const _error = getError(error);

        deletionDispatch(GCApiErrorAC({ ..._error, connectedId: param.id }));

        onError && onError(_error);
      }
    },
    [
      listDispatch,
      deletionDispatch,
      listState.param,
      detailsState.latestParam,
      detailsDispatch,
    ]
  );
