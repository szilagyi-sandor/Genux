export const removeFromArray = <T>(
  arr: T[],
  func: (item: T) => boolean,
  itemCount = 1
): T[] => {
  const output: T[] = [];

  let removedItems = 0;
  arr.forEach((item) => {
    if (func(item) && removedItems < itemCount) {
      removedItems++;
      return;
    }

    output.push(item);
  });

  return output;
};
