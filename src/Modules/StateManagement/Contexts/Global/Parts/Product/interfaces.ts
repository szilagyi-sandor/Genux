import { DeleteProductParam } from "Modules/Product/API/_Interfaces/DeleteProductParam";
import { GetProductDetailsParam } from "Modules/Product/API/_Interfaces/GetProductDetailsParam";
import { ListProductsParam } from "Modules/Product/API/_Interfaces/ListProductsParam";
import { ModifyProductStatusParam } from "Modules/Product/API/_Interfaces/ModifyProductStatusParam";
import { MoveProductParam } from "Modules/Product/API/_Interfaces/MoveProductParam";
import { Product } from "Modules/Product/_Interfaces/Product";
import { ApiCaller } from "Modules/StateManagement/Genux/ApiCallers/_Interfaces/ApiCaller";
import { DatalessApiCaller } from "Modules/StateManagement/Genux/ApiCallers/_Interfaces/DatalessApiCaller";
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

export interface ProductApiCallers {
  listProducts: ApiCaller<ListProductsParam, PagedItems<Product>>;
  getProductDetails: ApiCaller<GetProductDetailsParam, Product>;
  modifyProductStatus: DatalessApiCaller<ModifyProductStatusParam>;
  moveProduct: DatalessApiCaller<MoveProductParam>;
  deleteProduct: DatalessApiCaller<DeleteProductParam>;
}

export interface ProductCPProps {
  productStores: ProductStores;
  productApiCallers: ProductApiCallers;
}
