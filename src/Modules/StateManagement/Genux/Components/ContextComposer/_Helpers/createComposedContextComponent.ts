// CHECKED 1.0
import { Context } from "react";

import { ComposedContext } from "../interfaces";

// Explanation: #2.
export const createComposedContextComponent = <T>(
  context: Context<T>,
  value: T,
  blockChildren?: boolean
): ComposedContext<T> => ({ context, value, blockChildren });

export const cx4 = createComposedContextComponent;
