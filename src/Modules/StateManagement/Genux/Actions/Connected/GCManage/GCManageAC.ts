import { GCState } from "Modules/StateManagement/Genux/States/Connected/_Interfaces/GenuxItemState";
import { GCManageAction } from "./interfaces";

export const GCManageAC = <P = undefined>(
  payload: Partial<GCState<P>>
): GCManageAction<P> => ({
  type: "MANAGE",
  payload,
});
