// CHECKED 1.0
import { ComposedLoadableStores, LoadableStore } from "./interfaces";

export const checkGenuxLoading = (
  stores: ComposedLoadableStores,
  mapperFunc?: (
    store: LoadableStore,
    prevSelector: string[],
    prevIndexes: number[]
  ) => boolean,
  prevSelector: string[] = [],
  prevIndexes: number[] = []
) => {
  const keys = Object.keys(stores);

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const store = stores[key];

    const currentSelector = [...prevSelector, key];
    const currentIndexes = [...prevIndexes, i];

    if (Array.isArray(store)) {
      const storeState = store[0];
      const { loading, loadingIds } = storeState;

      // Handling a store.
      if (mapperFunc) {
        // Custom mapperFunc.
        if (mapperFunc(store, currentSelector, currentIndexes)) {
          return true;
        }
      } else {
        // Automatic check.
        if (loading || (loadingIds && loadingIds.length > 0)) {
          return true;
        }
      }
    } else {
      // Handling an object with stores.
      if (
        checkGenuxLoading(store, mapperFunc, currentSelector, currentIndexes)
      ) {
        return true;
      }
    }
  }

  return false;
};
