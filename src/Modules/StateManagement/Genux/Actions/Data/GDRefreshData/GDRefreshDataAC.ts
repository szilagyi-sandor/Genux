import { GDRefreshDataAction } from "./interfaces";

export const GDRefreshDataAC = <D = undefined>(
  payload: D
): GDRefreshDataAction<D> => ({
  type: "REFRESH_DATA",
  payload,
});
