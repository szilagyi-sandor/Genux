// CHECKED 1.0
export const toStringIfNotUndefined = (
  input: string | number | boolean | undefined,
  fallback: undefined | string = undefined
): string | undefined => (input === undefined ? fallback : input.toString());
