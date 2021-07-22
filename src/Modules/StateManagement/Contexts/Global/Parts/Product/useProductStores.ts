// CHECKED 1.0
import { DeleteProductParam } from "Modules/Product/API/_Interfaces/DeleteProductParam";
import { GetProductDetailsParam } from "Modules/Product/API/_Interfaces/GetProductDetailsParam";
import { ListProductsParam } from "Modules/Product/API/_Interfaces/ListProductsParam";
import { ModifyProductStatusParam } from "Modules/Product/API/_Interfaces/ModifyProductStatusParam";
import { MoveProductParam } from "Modules/Product/API/_Interfaces/MoveProductParam";
import { Product } from "Modules/Product/_Interfaces/Product";
import { useGCReducer } from "Modules/StateManagement/Genux/Hooks/useGenuxConnectedReducer";
import { useGDReducer } from "Modules/StateManagement/Genux/Hooks/useGenuxDataReducer";
import { Undefinedable } from "Modules/StateManagement/Genux/_Interfaces/Undefinedable";
import { PagedItems } from "_Interfaces/PagedItems";
import { ProductStores } from "./interfaces";

type ListData = Undefinedable<PagedItems<Product>>;
type DetailsData = Undefinedable<Product>;

export const useProductStores = (): ProductStores => ({
  list: useGDReducer<ListProductsParam, ListData>(undefined),
  details: useGDReducer<GetProductDetailsParam, DetailsData>(undefined),
  modifyStatus: useGCReducer<ModifyProductStatusParam>(),
  move: useGCReducer<MoveProductParam>(),
  delete: useGCReducer<DeleteProductParam>(),
});
