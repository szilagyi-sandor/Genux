import { LoginParam } from "../API/_Interfaces/LoginParam";
import { mockedCredentials } from "../_Constants/mockedCredentials";

export const checkCredentials = ({ password, username }: LoginParam) => {
  if (
    password === mockedCredentials.password &&
    username === mockedCredentials.username
  ) {
    return true;
  }
  return false;
};
