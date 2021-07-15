import { GlobalStores } from "../../interfaces";
import { ProductApiCallers } from "./interfaces";
import { useDeleteProductACC } from "./ProductACCs/useDeleteProductACC";
import { useGetProductDetailsACC } from "./ProductACCs/useGetProductDetailsACC";
import { useListProductsACC } from "./ProductACCs/useListProductsACC";
import { useModifyProductStatusACC } from "./ProductACCs/useModifyProductStatusACC";
import { useMoveProductACC } from "./ProductACCs/useMoveProductACC";

export const useProductACC = (stores: GlobalStores): ProductApiCallers => ({
  listProducts: useListProductsACC(stores),
  getProductDetails: useGetProductDetailsACC(stores),
  modifyProductStatus: useModifyProductStatusACC(stores),
  moveProduct: useMoveProductACC(stores),
  deleteProduct: useDeleteProductACC(stores),
});
