import React, { PropsWithChildren } from "react";

import { ProductCPProps } from "./interfaces";
import { productListContexts } from "./Parts/productListContexts";
import { productDetailsContexts } from "./Parts/productDetailsContexts";
import { productApiCallersContext } from "./Parts/productApiCallersContext";
import { productMovementContexts } from "./Parts/productMovementContexts";
import { productDeletionContexts } from "./Parts/productDeletionContexts";
import { productStatusModificationContexts } from "./Parts/productStatusModificationContexts";
import ContextComposer from "Modules/StateManagement/Genux/Components/ContextComposer/ContextComposer";
import { cx4 } from "Modules/StateManagement/Genux/Components/ContextComposer/_Helpers/createComposedContextComponents";

export const ProductCP = ({
  productStores,
  productApiCallers,
  children,
}: PropsWithChildren<ProductCPProps>) => {
  const {
    list: [listState, listDispatch],
    details: [detailsState, detailsDispatch],
    modifyStatus: [statusModificationState, statusModificationDispatch],
    move: [movementState, movementDispatch],
    delete: [deletionState, deletionDispatch],
  } = productStores;

  return (
    <ContextComposer
      contexts={[
        cx4(productListContexts.state, listState),
        cx4(productListContexts.dispatch, listDispatch),

        cx4(productDetailsContexts.state, detailsState),
        cx4(productDetailsContexts.dispatch, detailsDispatch),

        cx4(productStatusModificationContexts.state, statusModificationState),
        cx4(
          productStatusModificationContexts.dispatch,
          statusModificationDispatch
        ),

        cx4(productMovementContexts.state, movementState),
        cx4(productMovementContexts.dispatch, movementDispatch),

        cx4(productDeletionContexts.state, deletionState),
        cx4(productDeletionContexts.dispatch, deletionDispatch),

        cx4(productApiCallersContext, productApiCallers),
      ]}
    >
      {children}
    </ContextComposer>
  );
};
