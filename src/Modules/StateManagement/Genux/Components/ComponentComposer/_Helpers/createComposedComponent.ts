// CHECKED 1.0
import { ComponentType } from "react";

import { ComposedComponent } from "../interfaces";

// Explanation: #2.
export const createComposedComponent = <T>(
  Component: ComponentType<T>,
  props: T,
  blockChildren?: boolean
): ComposedComponent<T> => ({ Component, props, blockChildren });

export const cx3 = createComposedComponent;
