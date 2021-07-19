// CHECKED 1.0
export interface PagedItems<T> {
  items: T[];
  totalCount: number;
  take: number;
  skip: number;
}
