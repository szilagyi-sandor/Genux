// CHECKED 1.0
// A helper function to create asynchronous timeouts.
export const createAsyncTO = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
