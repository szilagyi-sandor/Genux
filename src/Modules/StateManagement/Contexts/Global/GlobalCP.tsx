// CHECKED 1.0
import React, { PropsWithChildren } from "react";

import { AuthCP } from "./Parts/Auth/AuthCP";
import { useGlobalStores } from "./useGlobalStores";
import { useGlobalACC } from "./useGlobalACC";
import { checkGenuxLoading } from "../../Genux/_Helpers/CheckGenuxLoading/checkGenuxLoading";
import { ProductCP } from "./Parts/Product/ProductCP";
import { cx3 } from "Modules/StateManagement/Genux/Components/ComponentComposer/_Helpers/createComposedComponents";
import Loader from "Modules/Layout/Components/Loader/Loader";
import ComponentComposer from "Modules/StateManagement/Genux/Components/ComponentComposer/ComponentComposer";

// CPs can take props if needed.
export default function GlobalCP({ children }: PropsWithChildren<{}>) {
  const globalStores = useGlobalStores();

  const { authStores, productStores } = globalStores;
  const { authApiCallers, productApiCallers } = useGlobalACC(globalStores);

  // TS needs the {...globalStores} spreading.
  const loading = checkGenuxLoading({ ...globalStores });

  return (
    <>
      <Loader loading={loading} />

      <ComponentComposer
        components={[
          cx3(AuthCP, {
            authStores,
            authApiCallers,
          }),
          cx3(ProductCP, {
            productStores,
            productApiCallers,
          }),
        ]}
      >
        {children}
      </ComponentComposer>
    </>
  );
}
