// CHECKED 1.0
import { GCState } from "Modules/StateManagement/Genux/States/Connected/_Interfaces/GenuxConnectedState";

export interface GCManageAction<P = undefined> {
  type: "MANAGE";
  payload: Partial<GCState<P>>;
}
