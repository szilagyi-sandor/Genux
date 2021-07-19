// CHECKED 1.0
import React from "react";

import { useUserSC } from "Modules/StateManagement/Contexts/Global/Parts/Auth/Parts/userContexts";
import { useProductDetailsSC } from "Modules/StateManagement/Contexts/Global/Parts/Product/Parts/productDetailsContexts";

export default function ProductDetails() {
  const { data: user } = useUserSC();
  const { data } = useProductDetailsSC();

  if (!data || !user) {
    return null;
  }

  const { name, id, status } = data;
  return (
    <div>
      <h2>Details</h2>

      <h3>{name}</h3>

      <p>id: {id}</p>

      <p>statusId: {status}</p>
    </div>
  );
}
