// CHECKED 1.0
import { GDState } from "../../../States/Data/_Interfaces/GenuxDataState";

export interface GDManageAction<P = undefined, D = undefined> {
  type: "MANAGE";
  payload: Partial<GDState<P, D>>;
}
