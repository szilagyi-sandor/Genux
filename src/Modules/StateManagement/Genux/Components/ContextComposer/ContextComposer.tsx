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

  if (currentComposedContext.blockChildren) {
    return null;
  }

  return (
    <currentComposedContext.context.Provider
      value={currentComposedContext.value}
    >
      <ContextComposer {...props} level={_level + 1}>
        {children}
      </ContextComposer>
    </currentComposedContext.context.Provider>
  );
}
