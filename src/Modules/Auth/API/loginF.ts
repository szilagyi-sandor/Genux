// CHECKED 1.0
import { checkCredentials } from "../_Helpers/checkCredentials";
import { loginParamLocalStorageName } from "../_Constants/loginParamLocalStorageName";
import { User } from "../_Interfaces/User";
import { LoginParam } from "./_Interfaces/LoginParam";
import { createAsyncTO } from "_Helpers/createAsyncTO";

export const loginF = async (param: LoginParam): Promise<User> => {
  console.info("loginF called");

  await createAsyncTO(2000);

  if (!checkCredentials(param)) {
    throw new Error("Invalid user");
  }

  localStorage.setItem(loginParamLocalStorageName, JSON.stringify(param));

  return {
    id: 1,
    name: "Test User",
  };
};
