// CHECKED 1.0
import { Context } from "react";

import { ComposedContext } from "../interfaces";

// Explanation: #2.
export const createComposedContextComponentPair = <T1, T2>(
  contexts: {
    state: Context<T1>;
    dispatch: Context<T2>;
  },
  values: [T1, T2],
  blockStateChildren?: boolean,
  blockDispatchChildren?: boolean
): [ComposedContext<T1>, ComposedContext<T2>] => {
  return [
    {
      context: contexts.state,
      value: values[0],
      blockChildren: blockStateChildren,
    },
    {
      context: contexts.dispatch,
      value: values[1],
      blockChildren: blockDispatchChildren,
    },
  ];
};

export const cx4Pair = createComposedContextComponentPair;
