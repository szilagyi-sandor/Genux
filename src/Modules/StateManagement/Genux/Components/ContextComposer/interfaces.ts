import { Context } from "react";

// TODO: Avoid usage of any. The type would need to be an existential type,
// which is not supported natively by TypeScript right now.
export interface ContextComposerProps {
  contexts: ComposedContext<any>[];
  level?: number;
}

export interface ComposedContext<T> {
  context: Context<T>;
  value: T;
  blockChildren?: boolean;
}
