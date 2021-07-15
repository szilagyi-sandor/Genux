import { Context } from "react";

import { ComposedContext } from "../interfaces";

// TODO: This function is only used to preserve type safeness. If we remove any
// from the ContextComposerProps this can be deleted.
export const createComposedContextComponents = <T>(
  context: Context<T>,
  value: T,
  blockChildren?: boolean
): ComposedContext<T> => ({ context, value, blockChildren });

export const cx4 = createComposedContextComponents;
