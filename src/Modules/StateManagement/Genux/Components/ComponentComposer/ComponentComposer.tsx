// CHECKED 1.0
import React, { PropsWithChildren } from "react";

import { ComponentComposerProps } from "./interfaces";

// This can only compose Components with children.
export default function ComponentComposer(
  props: PropsWithChildren<ComponentComposerProps>
) {
  const { components, level, children } = props;

  const _level = level || 0;
  const currentComposedComponent = components[_level];

  if (!currentComposedComponent) {
    return <>{children}</>;
  }

  const {
    Component,
    props: componentProps,
    blockChildren,
  } = currentComposedComponent;

  if (blockChildren) {
    return null;
  }

  return (
    <Component {...componentProps}>
      <ComponentComposer {...props} level={_level + 1}>
        {children}
      </ComponentComposer>
    </Component>
  );
}
