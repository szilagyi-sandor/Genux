// Manages the state of the params and nothing else.
export interface ManageParamAction<T> {
  type: "MANAGE_PARAM";
  // Cannot be ommited on purpose.
  payload: T | undefined;
}
