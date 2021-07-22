// CHECKED 1.0
import React, { PropsWithChildren } from "react";

import { ProductCPProps } from "./interfaces";
import { productListContexts } from "./Parts/productListContexts";
import { productDetailsContexts } from "./Parts/productDetailsContexts";
import { productSHContext } from "./Parts/productSHContext";
import { productMovementContexts } from "./Parts/productMovementContexts";
import { productDeletionContexts } from "./Parts/productDeletionContexts";
import { productStatusModificationContexts } from "./Parts/productStatusModificationContexts";
import ContextComposer from "Modules/StateManagement/Genux/Components/ContextComposer/ContextComposer";
import { cx4 } from "Modules/StateManagement/Genux/Components/ContextComposer/_Helpers/createComposedContextComponent";
import { cx4Pair } from "Modules/StateManagement/Genux/Components/ContextComposer/_Helpers/createComposedContextComponentPair";

export const ProductCP = ({
  productStores,
  productSH,
  children,
}: PropsWithChildren<ProductCPProps>) => {
  const {
    list: listStore,
    details: detailsStore,
    modifyStatus: modifyStatusStore,
    move: moveStore,
    delete: deleteStore,
  } = productStores;

  return (
    <ContextComposer
      contexts={[
        ...cx4Pair(productListContexts, listStore),
        ...cx4Pair(productDetailsContexts, detailsStore),
        ...cx4Pair(productStatusModificationContexts, modifyStatusStore),
        ...cx4Pair(productMovementContexts, moveStore),
        ...cx4Pair(productDeletionContexts, deleteStore),
        cx4(productSHContext, productSH),
      ]}
    >
      {children}
    </ContextComposer>
  );
};
