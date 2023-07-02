import { cloneDeep } from "./cloneDeep";

export const mergeDeep = (target: any, source: any) => {
  for (const key of Object.keys(source)) {
    if (source[key] instanceof Object) {
      Object.assign(source[key], mergeDeep(target[key], source[key]));
    }
  }

  return Object.assign(cloneDeep(target) || {}, source);
};
