import { ComponentType } from "react";

import { ComposedComponent } from "../interfaces";

// TODO: This function is only used to preserve type safeness. If we remove any
// from the ComponentComposerProps this can be deleted.
export const createComposedComponents = <T>(
  Component: ComponentType<T>,
  props: T,
  blockChildren?: boolean
): ComposedComponent<T> => ({ Component, props, blockChildren });

export const cx3 = createComposedComponents;
