import { GCState } from "Modules/StateManagement/Genux/States/Connected/_Interfaces/GenuxItemState";

export interface GCManageAction<P = undefined> {
  type: "MANAGE";
  payload: Partial<GCState<P>>;
}
