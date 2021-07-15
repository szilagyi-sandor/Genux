import React, { PropsWithChildren } from "react";

import { ComponentComposerProps } from "./interfaces";

// This can only compose Components with children.
export default function ComponentComposer(
  props: PropsWithChildren<ComponentComposerProps>
) {
  const { components, level, children } = props;

  const _level = level ? level : 0;
  const currentComposedComponent = components[_level];

  if (!currentComposedComponent) {
    return <>{children}</>;
  }

  if (currentComposedComponent.blockChildren) {
    return null;
  }

  return (
    <currentComposedComponent.Component {...currentComposedComponent.props}>
      <ComponentComposer {...props} level={_level + 1}>
        {children}
      </ComponentComposer>
    </currentComposedComponent.Component>
  );
}
