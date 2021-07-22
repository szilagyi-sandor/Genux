import React from "react";

// CHECKED 1.0
import "./UserBar.scss";

import { useAuthSH } from "Modules/StateManagement/Contexts/Global/Parts/Auth/Parts/authSHContext";
import { useLogoutSC } from "Modules/StateManagement/Contexts/Global/Parts/Auth/Parts/logoutContexts";
import { useUserSC } from "Modules/StateManagement/Contexts/Global/Parts/Auth/Parts/userContexts";

export function UserBar() {
  const { data } = useUserSC();
  const { loadingIds } = useLogoutSC();

  const { logout } = useAuthSH();

  return (
    <div className="userBar">
      <span className="userName">{data?.name || "Visitor"}</span>

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
