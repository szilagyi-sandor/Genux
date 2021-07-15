import React from "react";

import "./Loader.scss";

import { LoaderProps } from "./interfaces";

export default function Loader({ loading }: LoaderProps) {
  if (loading === false) {
    return null;
  }

  return (
    <div className="loader">
      <span className="srOnly">Loading...</span>
      <span className="indicator" />
    </div>
  );
}
