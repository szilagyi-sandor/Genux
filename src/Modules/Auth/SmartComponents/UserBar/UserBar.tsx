import React from "react";

import "./UserBar.scss";

import { useAuthApiCallers } from "Modules/StateManagement/Contexts/Global/Parts/Auth/Parts/authApiCallersContext";
import { useLogoutSC } from "Modules/StateManagement/Contexts/Global/Parts/Auth/Parts/logoutContexts";
import { useUserSC } from "Modules/StateManagement/Contexts/Global/Parts/Auth/Parts/userContexts";

export function UserBar() {
  const { data } = useUserSC();
  const { loadingIds } = useLogoutSC();
  const { logout } = useAuthApiCallers();

  return (
    <div className="userBar">
      <span className="userName">{data ? data.name : "Visitor"}</span>

      {data && (
        <div className="btnContainer">
          <button onClick={() => logout()} disabled={loadingIds.length > 0}>
            logout
          </button>
        </div>
      )}
    </div>
  );
}
