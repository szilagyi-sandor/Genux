import React from "react";

import "./LoginForm.scss";

import { manageParamAC } from "Modules/StateManagement/Genux/Actions/_Shared/ManageParam/manageParamAC";
import { useAuthApiCallers } from "Modules/StateManagement/Contexts/Global/Parts/Auth/Parts/authApiCallersContext";
import { useUserSC } from "Modules/StateManagement/Contexts/Global/Parts/Auth/Parts/userContexts";
import {
  useLoginDC,
  useLoginSC,
} from "Modules/StateManagement/Contexts/Global/Parts/Auth/Parts/loginContexts";

export default function LoginForm() {
  // Here's an example on how to use the param in GenuxDataStore.
  const { data } = useUserSC();
  const { param, errors, loadingIds } = useLoginSC();
  const loginDispatch = useLoginDC();
  const { login } = useAuthApiCallers();

  if (data) {
    return null;
  }

  return (
    <form
      className="loginForm"
      onSubmit={(e) => {
        e.preventDefault();
        login({
          username: param ? param.username : "",
          password: param ? param.password : "",
        });
      }}
    >
      <div className="inputContainer">
        <label htmlFor="username">Username</label>

        <input
          type="text"
          id="username"
          onChange={(e) =>
            loginDispatch(
              manageParamAC({
                username: e.target.value,
                password: param ? param.password : "",
              })
            )
          }
        />
      </div>

      <div className="inputContainer">
        <label htmlFor="password">Password</label>

        <input
          type="password"
          id="password"
          name="password"
          autoComplete="on"
          onChange={(e) =>
            loginDispatch(
              manageParamAC({
                password: e.target.value,
                username: param ? param.username : "",
              })
            )
          }
        />
      </div>

      <div className="btnContainer">
        <button type="submit" disabled={loadingIds.length > 0}>
          Submit
        </button>
      </div>

      {errors && (
        <div className="errorContainer">
          {errors.map((error, i) => (
            <p key={i}>{error.text}</p>
          ))}
        </div>
      )}
    </form>
  );
}
