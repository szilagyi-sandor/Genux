// CHECKED 1.0
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
        statusModificationDispatch(GCAddLoadingAC({ connectedId: param.id }));

        await modifyProductStatusF(param);

        const products = await listProductsF(
          listState.param || defaultProductListParam
        );

        if (detailsState.latestParam?.id === param.id) {
          const product = await getProductDetailsF({ id: param.id });

          detailsDispatch(GDRefreshDataAC(product));
        }

        listDispatch(GDRefreshDataAC(products));

        statusModificationDispatch(GCApiSuccessAC({ connectedId: param.id }));

        onSuccess && onSuccess();
      } catch (er) {
        const error = getError(er);

        statusModificationDispatch(
          GCApiErrorAC({ error: { ...error, connectedId: param.id } })
        );

        onError && onError(error);
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
