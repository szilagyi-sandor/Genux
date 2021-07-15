// Manages the loading and nothing else. Usually handles the start of an API call.
export interface GDManageLoadingAction {
  type: "MANAGE_LOADING";
  payload: boolean;
}
