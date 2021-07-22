// CHECKED 1.0
import { ComponentType } from "react";

// Explanation: #1.
export interface ComponentComposerProps {
  components: ComposedComponent<any>[];
  level?: number;
}

export interface ComposedComponent<T> {
  Component: ComponentType<T>;
  props: T;
  blockChildren?: boolean;
}
