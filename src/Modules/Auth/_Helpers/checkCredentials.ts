// CHECKED 1.0
import { LoginParam } from "../API/_Interfaces/LoginParam";
import { mockedCredentials } from "../_Constants/mockedCredentials";

export const checkCredentials = ({ password, username }: LoginParam) =>
  password === mockedCredentials.password &&
  username === mockedCredentials.username;
