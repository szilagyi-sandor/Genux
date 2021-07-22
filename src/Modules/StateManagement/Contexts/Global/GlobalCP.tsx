// CHECKED 1.0
import React, { PropsWithChildren } from "react";

import { AuthCP } from "./Parts/Auth/AuthCP";
import { useGlobalStores } from "./useGlobalStores";
import { useGlobalSHC } from "./useGlobalSHC";
import { checkGenuxLoading } from "../../Genux/_Helpers/CheckGenuxLoading/checkGenuxLoading";
import { ProductCP } from "./Parts/Product/ProductCP";
import { cx3 } from "Modules/StateManagement/Genux/Components/ComponentComposer/_Helpers/createComposedComponent";
import Loader from "Modules/Layout/Components/Loader/Loader";
import ComponentComposer from "Modules/StateManagement/Genux/Components/ComponentComposer/ComponentComposer";

// CPs can take props if needed.
export default function GlobalCP({ children }: PropsWithChildren<{}>) {
  const globalStores = useGlobalStores();

  const { authStores, productStores } = globalStores;
  const { authSH, productSH } = useGlobalSHC(globalStores);

  // TS needs the {...globalStores} spreading.
  const loading = checkGenuxLoading({ ...globalStores });

  return (
    <>
      <Loader loading={loading} />

      <ComponentComposer
        components={[
          cx3(AuthCP, {
            authStores,
            authSH,
          }),
          cx3(ProductCP, {
            productStores,
            productSH,
          }),
        ]}
      >
        {children}
      </ComponentComposer>
    </>
  );
}
