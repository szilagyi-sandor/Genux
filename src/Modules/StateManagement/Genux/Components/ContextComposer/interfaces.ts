// CHECKED 1.0
import { Context } from "react";

// Explanation: #1.
export interface ContextComposerProps {
  contexts: ComposedContext<any>[];
  level?: number;
}

export interface ComposedContext<T> {
  context: Context<T>;
  value: T;
  blockChildren?: boolean;
}
