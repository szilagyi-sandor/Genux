import { useCallback } from "react";

import { listProductsF } from "Modules/Product/API/listProductsF";
import { modifyProductStatusF } from "Modules/Product/API/modifyProductStatusF";
import { defaultProductListParam } from "Modules/Product/_Constants/defaultProductListParam";
import { GCAddLoadingAC } from "Modules/StateManagement/Genux/Actions/Connected/GCAddLoading/GCAddLoadingAC";
import { GCApiErrorAC } from "Modules/StateManagement/Genux/Actions/Connected/GCApiError/GCApiErrorAC";
import { GCApiSuccessAC } from "Modules/StateManagement/Genux/Actions/Connected/GCApiSuccess/GCApiSuccessAC";
import { GDRefreshDataAC } from "Modules/StateManagement/Genux/Actions/Data/GDRefreshData/GDRefreshDataAC";
import { getError } from "_Helpers/getError";
import { GlobalStores } from "../../../interfaces";
import { ProductApiCallers } from "../interfaces";
import { getProductDetailsF } from "Modules/Product/API/getProductDetailsF";

export const useModifyProductStatusACC = ({
  productStores: {
    list: [listState, listDispatch],
    details: [detailsState, detailsDispatch],
    modifyStatus: [, statusModificationDispatch],
  },
}: GlobalStores): ProductApiCallers["modifyProductStatus"] =>
  useCallback(
    async (param, onSuccess, onError) => {
      try {
        statusModificationDispatch(GCAddLoadingAC(param.id));

        await modifyProductStatusF(param);

        const products = await listProductsF(
          listState.param || defaultProductListParam
        );

        if (
          detailsState.latestParam &&
          detailsState.latestParam.id === param.id
        ) {
          const product = await getProductDetailsF({ id: param.id });
          detailsDispatch(GDRefreshDataAC(product));
        }

        listDispatch(GDRefreshDataAC(products));
        statusModificationDispatch(GCApiSuccessAC(param.id));

        onSuccess && onSuccess();
      } catch (error) {
        const _error = getError(error);

        statusModificationDispatch(
          GCApiErrorAC({ ..._error, connectedId: param.id })
        );

        onError && onError(_error);
      }
    },
    [
      listDispatch,
      statusModificationDispatch,
      listState.param,
      detailsState.latestParam,
      detailsDispatch,
    ]
  );
