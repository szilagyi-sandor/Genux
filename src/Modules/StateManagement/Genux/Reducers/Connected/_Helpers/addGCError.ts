// CHECKED 1.0
import { GenuxConnectedError } from "Modules/StateManagement/Genux/States/Connected/_Interfaces/GenuxConnectedError";

export const addGCError = (
  stateErrors: GenuxConnectedError[],
  error: GenuxConnectedError,
  isParallel?: boolean
) =>
  !isParallel && stateErrors.find((er) => er.connectedId === error.connectedId)
    ? stateErrors
    : [...stateErrors, error];
