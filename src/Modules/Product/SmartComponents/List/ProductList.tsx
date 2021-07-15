import React, { useEffect } from "react";

import "./ProductList.scss";

import { defaultProductListParam } from "Modules/Product/_Constants/defaultProductListParam";
import { useUserSC } from "Modules/StateManagement/Contexts/Global/Parts/Auth/Parts/userContexts";
import { useProductApiCallers } from "Modules/StateManagement/Contexts/Global/Parts/Product/Parts/productApiCallersContext";
import { useProductListSC } from "Modules/StateManagement/Contexts/Global/Parts/Product/Parts/productListContexts";
import { productStatuses } from "Modules/Product/_Constants/productStatuses";
import { useProductStatusModificationSC } from "Modules/StateManagement/Contexts/Global/Parts/Product/Parts/productStatusModificationContexts";
import { productReorderTypes } from "Modules/Product/_Constants/productReorderTypes";
import { useProductMovementSC } from "Modules/StateManagement/Contexts/Global/Parts/Product/Parts/productMovementContexts";
import { useProductDeletionSC } from "Modules/StateManagement/Contexts/Global/Parts/Product/Parts/productDeletionContexts";
import {
  useProductDetailsDC,
  useProductDetailsSC,
} from "Modules/StateManagement/Contexts/Global/Parts/Product/Parts/productDetailsContexts";
import { GDSetDataAC } from "Modules/StateManagement/Genux/Actions/Data/GDSetData/GDSetDataAC";
import { GetProductDetailsParam } from "Modules/Product/API/_Interfaces/GetProductDetailsParam";
import { Undefinedable } from "Modules/StateManagement/Genux/_Interfaces/Undefinedable";
import { Product } from "Modules/Product/_Interfaces/Product";

export default function ProductList() {
  const { data: user } = useUserSC();

  const { data, error } = useProductListSC();

  const { data: details } = useProductDetailsSC();
  const detailsDispatch = useProductDetailsDC();

  const { loadingIds: statusLoadingIds, errors: statusErrors } =
    useProductStatusModificationSC();
  const { loadingIds: movementLoadingIds, errors: movementErrors } =
    useProductMovementSC();
  const { loadingIds: deletionLoadingIds, errors: deletionErrors } =
    useProductDeletionSC();

  const allErrors = [...statusErrors, ...movementErrors, ...deletionErrors];
  const allErrorIds = allErrors.map((e) => e.connectedId);

  const {
    listProducts,
    modifyProductStatus,
    moveProduct,
    deleteProduct,
    getProductDetails,
  } = useProductApiCallers();

  useEffect(() => {
    listProducts(defaultProductListParam);
  }, [listProducts]);

  if (!user) {
    return null;
  }

  return (
    <div className="productList">
      <h2>List</h2>

      {data ? (
        <div className="tableContainer">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {data.items.length > 0 ? (
                data.items.map((item) => {
                  const { id, name, status } = item;
                  const isLoading =
                    statusLoadingIds.includes(id) ||
                    movementLoadingIds.includes(id) ||
                    deletionLoadingIds.includes(id);

                  const hasError = allErrorIds.includes(id);

                  const classNames: string[] = [];
                  isLoading && classNames.push("loading");
                  hasError && classNames.push("hasError");

                  return (
                    <tr key={id} className={classNames.join(" ")}>
                      <td>{id}</td>

                      <td>{name}</td>

                      <td>
                        <span
                          className={
                            status === productStatuses.accepted.id
                              ? "accepted"
                              : status === productStatuses.rejected.id
                              ? "rejected"
                              : "unspecified"
                          }
                        >
                          {status === productStatuses.accepted.id
                            ? "Accepted"
                            : status === productStatuses.rejected.id
                            ? "Rejected"
                            : "Unspecified"}
                        </span>
                      </td>

                      <td>
                        <button
                          onClick={() => {
                            if (details && details.id === id) {
                              detailsDispatch(
                                GDSetDataAC<
                                  GetProductDetailsParam,
                                  Undefinedable<Product>
                                >({
                                  data: undefined,
                                  param: undefined,
                                })
                              );
                              return;
                            }

                            getProductDetails({ id });
                          }}
                        >
                          {details && details.id === id ? "Hide " : "Show "}
                          details
                        </button>

                        {status !== productStatuses.accepted.id && (
                          <button
                            onClick={() =>
                              modifyProductStatus({
                                id,
                                status: productStatuses.accepted.id,
                              })
                            }
                            // disabled={isLoading}
                          >
                            Accept
                          </button>
                        )}

                        {status !== productStatuses.rejected.id && (
                          <button
                            onClick={() =>
                              modifyProductStatus({
                                id,
                                status: productStatuses.rejected.id,
                              })
                            }
                            disabled={isLoading}
                          >
                            Reject
                          </button>
                        )}

                        <button
                          onClick={() =>
                            moveProduct({
                              id,
                              reorderType: productReorderTypes.moveUp.id,
                            })
                          }
                          disabled={isLoading}
                        >
                          Move up
                        </button>

                        <button
                          onClick={() =>
                            moveProduct({
                              id,
                              reorderType: productReorderTypes.moveDown.id,
                            })
                          }
                          disabled={isLoading}
                        >
                          Move down
                        </button>

                        <button
                          onClick={() =>
                            deleteProduct({
                              id,
                            })
                          }
                          disabled={isLoading}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={4}>No product found.</td>
                </tr>
              )}
            </tbody>
          </table>

          <div className="errorContainer">
            {allErrors.map((error) => (
              <p className="error">{error.text}</p>
            ))}
          </div>
        </div>
      ) : error ? (
        <div className="errorContainer">
          <p className="error">{error.text}</p>
        </div>
      ) : null}
    </div>
  );
}
