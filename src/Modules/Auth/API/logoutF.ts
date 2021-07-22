// CHECKED 1.0
import { createAsyncTO } from "_Helpers/createAsyncTO";
import { loginParamLocalStorageName } from "../_Constants/loginParamLocalStorageName";

export const logoutF = async (): Promise<void> => {
  console.info("logoutF called");

  await createAsyncTO(2000);

  localStorage.removeItem(loginParamLocalStorageName);
};
