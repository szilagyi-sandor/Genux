import { GCState } from "Modules/StateManagement/Genux/States/Connected/_Interfaces/GenuxItemState";

// Manages the whole state together. Useful for special cases.
export interface GCManageAction<P = undefined> {
  type: "MANAGE";
  payload: GCState<P>;
}
