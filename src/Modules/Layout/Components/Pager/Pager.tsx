import React from "react";

import "./Pager.scss";

import { PagerProps } from "./interfaces";

export default function Pager({
  currentPage,
  pageCount,
  disabled,
  setPage,
}: PagerProps) {
  return (
    <div className="pager">
      <ul>
        <li>
          <button
            onClick={() => setPage(currentPage - 1)}
            disabled={currentPage === 1 || disabled}
          >
            Previous
          </button>
        </li>

        <li>
          <span>
            {currentPage} / {pageCount}
          </span>
        </li>

        <li>
          <button
            onClick={() => setPage(currentPage + 1)}
            disabled={currentPage === pageCount || disabled}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
}
