// CHECKED 1.0
import { GlobalStores } from "../../interfaces";
import { ProductSH } from "./interfaces";
import { useDeleteProductSHC } from "./ProductSHC/useDeleteProductSHC";
import { useGetProductDetailsSHC } from "./ProductSHC/useGetProductDetailsSHC";
import { useListProductsSHC } from "./ProductSHC/useListProductsSHC";
import { useModifyProductStatusSHC } from "./ProductSHC/useModifyProductStatusSHC";
import { useMoveProductSHC } from "./ProductSHC/useMoveProductSHC";

export const useProductSHC = (stores: GlobalStores): ProductSH => ({
  listProducts: useListProductsSHC(stores),
  getProductDetails: useGetProductDetailsSHC(stores),
  modifyProductStatus: useModifyProductStatusSHC(stores),
  moveProduct: useMoveProductSHC(stores),
  deleteProduct: useDeleteProductSHC(stores),
});
