import { GenuxCommonError } from "../Modules/StateManagement/Genux/_Interfaces/CommonError";

export const getError = (param: any): GenuxCommonError => {
  return {
    errorId: 1,
    text: "Error.",
  };
};
