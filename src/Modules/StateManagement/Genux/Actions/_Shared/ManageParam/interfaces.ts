// CHECKED 1.0
export interface ManageParamAction<T> {
  type: "MANAGE_PARAM";
  // Cannot be ommited on purpose.
  payload: T | undefined;
}
