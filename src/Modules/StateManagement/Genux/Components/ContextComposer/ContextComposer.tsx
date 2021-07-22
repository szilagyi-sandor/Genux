// CHECKED 1.0
import React, { PropsWithChildren } from "react";

import { ContextComposerProps } from "./interfaces";

export default function ContextComposer(
  props: PropsWithChildren<ContextComposerProps>
) {
  const { contexts, level, children } = props;

  const _level = level || 0;
  const currentComposedContext = contexts[_level];

  if (!currentComposedContext) {
    return <>{children}</>;
  }

  const {
    context: { Provider },
    blockChildren,
    value,
  } = currentComposedContext;

  if (blockChildren) {
    return null;
  }

  return (
    <Provider value={value}>
      <ContextComposer {...props} level={_level + 1}>
        {children}
      </ContextComposer>
    </Provider>
  );
}
