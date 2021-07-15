import { GDState } from "../../../States/Data/_Interfaces/GenuxDataState";
import { GDManageAction } from "./interfaces";

export const GDManageAC = <P = undefined, D = undefined>(
  payload: GDState<P, D>
): GDManageAction<P, D> => ({
  type: "MANAGE",
  payload,
});
