export const toStringArrayIfNotUndefined = (
  inputs: Array<string | number | boolean> | undefined,
  fallback: undefined | string[] = undefined
): string[] | undefined =>
  inputs === undefined ? fallback : inputs.map((input) => input.toString());
