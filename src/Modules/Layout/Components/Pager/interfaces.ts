export interface PagerProps {
  currentPage: number;
  pageCount: number;
  disabled?: boolean;
  setPage: (page: number) => void;
}
