// CHECKED 1.0
export const addGCLoading = (
  stateLoadingIds: Array<string | number>,
  connectedId: number | string,
  isParallel?: boolean
) =>
  !isParallel && stateLoadingIds.includes(connectedId)
    ? stateLoadingIds
    : [...stateLoadingIds, connectedId];
