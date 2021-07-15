import { GDState } from "../../../States/Data/_Interfaces/GenuxDataState";

// Manages the whole state together. Useful for special cases.
export interface GDManageAction<P = undefined, D = undefined> {
  type: "MANAGE";
  payload: GDState<P, D>;
}
