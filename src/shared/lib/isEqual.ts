export const isEqualProps = (oldProps: any, newProps: any) => Object.entries(newProps).reduce(
  (result, [key, value]: [string, any]) => {
    // if (!oldProps.hasOwnProperty(key)) {
    //   throw new Error('Wrong property');
    // }

    if (typeof value === 'object') {
      const oldValue = JSON.stringify(oldProps[key]);
      if (oldValue !== JSON.stringify(value)) {
        result = false;
      }
    } else {
      result = value === oldProps[key];
    }

    return result;
  },
  true,
);
