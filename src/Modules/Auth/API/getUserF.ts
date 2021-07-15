import { createAsyncTO } from "_Helpers/createAsyncTO";
import { checkCredentials } from "../_Helpers/checkCredentials";
import { User } from "../_Interfaces/User";
import { LoginParam } from "./_Interfaces/LoginParam";

export const getUserF = async (param: LoginParam): Promise<User> => {
  console.log("getUserF called");
  await createAsyncTO(2000);

  if (!checkCredentials(param)) {
    throw new Error("Invalid user");
  }

  return {
    id: 1,
    name: "Test User",
  };
};
