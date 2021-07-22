// CHECKED 1.0
import { GenuxConnectedError } from "Modules/StateManagement/Genux/States/Connected/_Interfaces/GenuxConnectedError";
import { removeFromArray } from "Modules/StateManagement/Genux/_Helpers/removeFromArray";

export const removeGCError = (
  stateErrors: GenuxConnectedError[],
  connectedId: string | number,
  isParallel?: boolean
) =>
  isParallel
    ? removeFromArray(stateErrors, (error) => error.connectedId === connectedId)
    : stateErrors.filter((error) => error.connectedId !== connectedId);
