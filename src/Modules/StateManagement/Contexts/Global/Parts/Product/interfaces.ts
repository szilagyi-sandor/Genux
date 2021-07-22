// CHECKED 1.0
import { DeleteProductParam } from "Modules/Product/API/_Interfaces/DeleteProductParam";
import { GetProductDetailsParam } from "Modules/Product/API/_Interfaces/GetProductDetailsParam";
import { ListProductsParam } from "Modules/Product/API/_Interfaces/ListProductsParam";
import { ModifyProductStatusParam } from "Modules/Product/API/_Interfaces/ModifyProductStatusParam";
import { MoveProductParam } from "Modules/Product/API/_Interfaces/MoveProductParam";
import { Product } from "Modules/Product/_Interfaces/Product";
import { ASH } from "Modules/StateManagement/Genux/StateHandlers/_Interfaces/Basic/AsyncStateHandler";
import { DASH } from "Modules/StateManagement/Genux/StateHandlers/_Interfaces/Dataless/DatalessAsyncStateHandler";
import { GCStore } from "Modules/StateManagement/Genux/_Interfaces/GenuxConnectedStore";
import { GDStore } from "Modules/StateManagement/Genux/_Interfaces/GenuxDataStore";
import { Undefinedable } from "Modules/StateManagement/Genux/_Interfaces/Undefinedable";
import { PagedItems } from "_Interfaces/PagedItems";

export type ProductStores = {
  list: GDStore<ListProductsParam, Undefinedable<PagedItems<Product>>>;
  details: GDStore<GetProductDetailsParam, Undefinedable<Product>>;
  modifyStatus: GCStore<ModifyProductStatusParam>;
  move: GCStore<MoveProductParam>;
  delete: GCStore<DeleteProductParam>;
};

export interface ProductSH {
  listProducts: ASH<ListProductsParam, PagedItems<Product>>;
  getProductDetails: ASH<GetProductDetailsParam, Product>;
  modifyProductStatus: DASH<ModifyProductStatusParam>;
  moveProduct: DASH<MoveProductParam>;
  deleteProduct: DASH<DeleteProductParam>;
}

export interface ProductCPProps {
  productStores: ProductStores;
  productSH: ProductSH;
}
