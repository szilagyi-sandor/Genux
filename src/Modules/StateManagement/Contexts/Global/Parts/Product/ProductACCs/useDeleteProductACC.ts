// CHECKED 1.0
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
        deletionDispatch(GCAddLoadingAC({ connectedId: param.id }));

        await deleteProductF(param);

        const products = await listProductsF(
          listState.param || defaultProductListParam
        );

        listDispatch(GDRefreshDataAC(products));

        if (detailsState.latestParam?.id === param.id) {
          detailsDispatch(GDRefreshDataAC(undefined));
        }

        deletionDispatch(GCApiSuccessAC({ connectedId: param.id }));

        onSuccess && onSuccess();
      } catch (er) {
        const error = getError(er);

        deletionDispatch(
          GCApiErrorAC({ error: { ...error, connectedId: param.id } })
        );

        onError && onError(error);
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
