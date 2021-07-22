// CHECKED 1.0
import { removeFromArray } from "Modules/StateManagement/Genux/_Helpers/removeFromArray";

export const removeGCLoading = (
  stateLoadingIds: Array<string | number>,
  connectedId: string | number,
  isParallel?: boolean
) =>
  isParallel
    ? removeFromArray(stateLoadingIds, (id) => id === connectedId)
    : stateLoadingIds.filter((id) => id !== connectedId);
