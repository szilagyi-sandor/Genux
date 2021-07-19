import React from "react";

import "./ProductFilter.scss";

import { useProductApiCallers } from "Modules/StateManagement/Contexts/Global/Parts/Product/Parts/productApiCallersContext";
import { defaultProductListParam } from "Modules/Product/_Constants/defaultProductListParam";
import {
  useProductListDC,
  useProductListSC,
} from "Modules/StateManagement/Contexts/Global/Parts/Product/Parts/productListContexts";
import { manageParamAC } from "Modules/StateManagement/Genux/Actions/_Shared/ManageParam/manageParamAC";

export default function ProductFilter() {
  const { param } = useProductListSC();
  const productDispatch = useProductListDC();
  const { listProducts } = useProductApiCallers();

  return (
    <div className="productFilter">
      <form
        onSubmit={(e) => {
          e.preventDefault();

          listProducts({
            ...defaultProductListParam,
            ...param,
          });
        }}
      >
        <div className="inputContainer">
          <input
            type="text"
            value={param?.search || ""}
            onChange={(e) =>
              productDispatch(
                manageParamAC({
                  ...defaultProductListParam,
                  search: e.target.value,
                })
              )
            }
          />
        </div>

        <button type="submit">Search</button>
      </form>
    </div>
  );
}
