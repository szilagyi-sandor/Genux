import { DeleteProductParam } from "Modules/Product/API/_Interfaces/DeleteProductParam";
import { GetProductDetailsParam } from "Modules/Product/API/_Interfaces/GetProductDetailsParam";
import { ListProductsParam } from "Modules/Product/API/_Interfaces/ListProductsParam";
import { ModifyProductStatusParam } from "Modules/Product/API/_Interfaces/ModifyProductStatusParam";
import { MoveProductParam } from "Modules/Product/API/_Interfaces/MoveProductParam";
import { Product } from "Modules/Product/_Interfaces/Product";
import { useGenuxConnectedReducer } from "Modules/StateManagement/Genux/Hooks/useGCReducer";
import { useGenuxDataReducer } from "Modules/StateManagement/Genux/Hooks/useGDReducer";
import { Undefinedable } from "Modules/StateManagement/Genux/_Interfaces/Undefinedable";
import { PagedItems } from "_Interfaces/PagedItems";
import { ProductStores } from "./interfaces";

type ListData = Undefinedable<PagedItems<Product>>;
type DetailsData = Undefinedable<Product>;

export const useProductStores = (): ProductStores => ({
  list: useGenuxDataReducer<ListProductsParam, ListData>(undefined),
  details: useGenuxDataReducer<GetProductDetailsParam, DetailsData>(undefined),
  modifyStatus: useGenuxConnectedReducer<ModifyProductStatusParam>(),
  move: useGenuxConnectedReducer<MoveProductParam>(),
  delete: useGenuxConnectedReducer<DeleteProductParam>(),
});
