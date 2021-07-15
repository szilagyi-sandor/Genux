import { productStatuses } from "../_Constants/productStatuses";
import { Product } from "../_Interfaces/Product";

export const mockedProducts: Product[] = [
  {
    id: 1,
    name: "Project 1",
    status: productStatuses.unspecified.id,
  },
  {
    id: 2,
    name: "Project 2",
    status: productStatuses.unspecified.id,
  },
  {
    id: 3,
    name: "Project 3",
    status: productStatuses.unspecified.id,
  },
  {
    id: 4,
    name: "Project 4",
    status: productStatuses.unspecified.id,
  },
  {
    id: 5,
    name: "Project 5",
    status: productStatuses.unspecified.id,
  },
  {
    id: 6,
    name: "Project 6",
    status: productStatuses.unspecified.id,
  },
];
