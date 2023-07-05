const createChildComponent = (components: Record<string, any>, props: any) => {
  if (props.model) {
    return new components[props.component](props, props.model);
  }
  return new components[props.component](props);
};

export const createChildren = (
  components: Record<string, unknown>,
  children: Record<string, unknown>,
) => {
  const result: Record<string, any> = {};

  Object.entries(children).forEach(([name, component]: [string, any]) => {
    if (Array.isArray(component)) {
      result[name] = component.map((item) => createChildComponent(components, item));
    } else {
      result[name] = createChildComponent(components, component);
    }
  });

  return result;
};
