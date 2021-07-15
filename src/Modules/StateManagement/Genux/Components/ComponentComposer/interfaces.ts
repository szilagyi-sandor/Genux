import { ComponentType } from "react";

// TODO: Avoid usage of any. The type would need to be an existential type,
// which is not supported natively by TypeScript right now.
export interface ComponentComposerProps {
  components: ComposedComponent<any>[];
  level?: number;
}

export interface ComposedComponent<T> {
  Component: ComponentType<T>;
  props: T;
  blockChildren?: boolean;
}
