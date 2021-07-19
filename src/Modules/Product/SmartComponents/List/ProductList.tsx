// CHECKED 1.0
import React, { useEffect, useRef, useState } from "react";

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
import Pager from "Modules/Layout/Components/Pager/Pager";
import { calculateProductPagerValues } from "./_Helpers/calculateProductPagerValues";
import { ProductCallCounter } from "./interfaces";
import { ListProductsParam } from "Modules/Product/API/_Interfaces/ListProductsParam";
import ProductFilter from "../Filter/ProductFilter";

export default function ProductList() {
  const { data: user } = useUserSC();
  const { data, error, latestParam, loading } = useProductListSC();
  const { data: details } = useProductDetailsSC();
  const { loadingIds: statusLoadingIds, errors: statusErrors } =
    useProductStatusModificationSC();
  const { loadingIds: movementLoadingIds, errors: movementErrors } =
    useProductMovementSC();
  const { loadingIds: deletionLoadingIds, errors: deletionErrors } =
    useProductDeletionSC();

  const detailsDispatch = useProductDetailsDC();

  const {
    listProducts,
    modifyProductStatus,
    moveProduct,
    deleteProduct,
    getProductDetails,
  } = useProductApiCallers();

  const allErrors = [...statusErrors, ...movementErrors, ...deletionErrors];
  const allErrorIds = allErrors.map((e) => e.connectedId);

  // Creating a call counter to make parallel calls possible.
  const callCounterRef = useRef<ProductCallCounter>({
    known: 0,
    // Has to be -1 for the first initial run.
    handled: -1,
  });

  // Storing the param in state as a mirror. This mirror is needed because this is
  // only the state of this pager. if this modified in a form or something,
  // we dont want this to be modified.
  const [latestParamMirror, setLatestParamMirror] =
    useState<Undefinedable<ListProductsParam>>(undefined);

  useEffect(() => {
    listProducts(defaultProductListParam);
  }, [listProducts]);

  // Initiliaze the latestParamMirror.
  useEffect(() => {
    if (!latestParamMirror && latestParam) {
      setLatestParamMirror(latestParam);
    }
  }, [latestParamMirror, latestParam]);

  // We keep track of latestParam modifications, but if this runs more than
  // that it means someone else updated it. In that case we need to update
  // the state too.
  useEffect(() => {
    if (!latestParam) {
      return;
    }

    callCounterRef.current.handled++;
    const { handled, known } = callCounterRef.current;

    const needsRefresh = handled > known;

    if (needsRefresh) {
      callCounterRef.current = {
        handled: 0,
        known: 0,
      };

      setLatestParamMirror(latestParam);
    }
  }, [latestParam]);

  // Right usage is this!!
  // This is all you need if you cancel the previous calls in useListProductsACC.
  // That's because the latest param will only be updated when the last one finished.
  // useEffect(() => {
  //   setLatestParamMirror(latestParam);
  // }, [latestParam]);

  const pagerValues = calculateProductPagerValues(data, latestParamMirror);
  const { currentPage, pageCount } = pagerValues;

  if (!user) {
    return null;
  }

  return (
    <div className="productList">
      <h2>List</h2>

      <ProductFilter />

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
                            if (details?.id === id) {
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
                          {details?.id === id ? "Hide " : "Show "}
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
                            disabled={isLoading}
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

          <Pager
            currentPage={currentPage}
            pageCount={pageCount}
            disabled={!!latestParam?.search && loading}
            setPage={(page) => {
              const skip = defaultProductListParam.take * (page - 1);
              const newListParam = {
                ...defaultProductListParam,
                ...latestParam,
                skip,
              };

              callCounterRef.current.known++;
              listProducts(newListParam);

              setLatestParamMirror(newListParam);
            }}
          />
        </div>
      ) : error ? (
        <div className="errorContainer">
          <p className="error">{error.text}</p>
        </div>
      ) : null}
    </div>
  );
}
