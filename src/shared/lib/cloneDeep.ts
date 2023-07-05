export const cloneDeep = (src: any) => {
  const bObject: any | any[] = Array.isArray(src) ? [] : {};

  let value;
  Object.keys(src).forEach((key) => {
    if (!src.hasOwnProperty(key)) {
      return;
    }
    value = src[key];

    bObject[key] = typeof value === 'object' ? cloneDeep(value) : value;
  });

  return bObject;
};
