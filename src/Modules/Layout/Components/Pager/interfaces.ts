// CHECKED 1.0
export interface PagerProps {
  currentPage: number;
  pageCount: number;
  disabled?: boolean;
  setPage: (page: number) => void;
}
