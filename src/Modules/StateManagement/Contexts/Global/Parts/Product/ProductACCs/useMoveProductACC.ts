import { useCallback } from "react";

import { listProductsF } from "Modules/Product/API/listProductsF";
import { moveProductF } from "Modules/Product/API/moveProductF";
import { defaultProductListParam } from "Modules/Product/_Constants/defaultProductListParam";
import { GCAddLoadingAC } from "Modules/StateManagement/Genux/Actions/Connected/GCAddLoading/GCAddLoadingAC";
import { GCApiErrorAC } from "Modules/StateManagement/Genux/Actions/Connected/GCApiError/GCApiErrorAC";
import { GCApiSuccessAC } from "Modules/StateManagement/Genux/Actions/Connected/GCApiSuccess/GCApiSuccessAC";
import { GDRefreshDataAC } from "Modules/StateManagement/Genux/Actions/Data/GDRefreshData/GDRefreshDataAC";
import { getError } from "_Helpers/getError";
import { GlobalStores } from "../../../interfaces";
import { ProductApiCallers } from "../interfaces";

export const useMoveProductACC = ({
  productStores: {
    list: [listState, listDispatch],
    move: [, movementDispatch],
  },
}: GlobalStores): ProductApiCallers["moveProduct"] =>
  useCallback(
    async (param, onSuccess, onError) => {
      try {
        movementDispatch(GCAddLoadingAC(param.id));

        await moveProductF(param);

        const products = await listProductsF(
          listState.param || defaultProductListParam
        );

        listDispatch(GDRefreshDataAC(products));
        movementDispatch(GCApiSuccessAC(param.id));

        onSuccess && onSuccess();
      } catch (error) {
        const _error = getError(error);

        movementDispatch(GCApiErrorAC({ ..._error, connectedId: param.id }));

        onError && onError(_error);
      }
    },
    [listDispatch, movementDispatch, listState.param]
  );
