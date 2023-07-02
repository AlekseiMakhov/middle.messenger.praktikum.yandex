import { CanUndef } from "../../types";

// eslint-disable-next-line no-shadow
enum METHODS {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
}

type FetchData = CanUndef<object> | string;

export type FetchOptions = {
  data?: FetchData;
  method?: METHODS;
  timeout?: number;
  headers?: any;
  retries?: number;
};

function queryStringify(data: FetchData) {
  if (!data) {
    return "";
  }
  return `?${Object.entries(data)
    .reduce((acc: string[], [key, value]) => {
      const preparedValue = Array.isArray(value)
        ? value.join(",")
        : String(value);
      acc.push(`${key}=${preparedValue}`);
      return acc;
    }, [])
    .join("&")}`;
}

const prepareData = (data: FetchData) => JSON.stringify(data);

class HTTPTransport {
  get = (url: string, options: FetchOptions = {}) => {
    const data = queryStringify(options.data);
    return this.request(url + data, { ...options, method: METHODS.GET });
  };

  post = (url: string, options: FetchOptions = {}) => {
    options.data = prepareData(options.data);
    return this.request(url, { ...options, method: METHODS.POST });
  };

  put = (url: string, options: FetchOptions = {}) => {
    options.data = prepareData(options.data);
    return this.request(url, { ...options, method: METHODS.PUT });
  };

  delete = (url: string, options: FetchOptions = {}) => {
    options.data = prepareData(options.data);
    return this.request(url, { ...options, method: METHODS.DELETE });
  };

  request = async (url: string, options: FetchOptions) => {
    const { method, data, headers, timeout } = options;
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method as string, url);

      Object.keys(headers).forEach((name) => {
        xhr.setRequestHeader(name, headers[name]);
      });

      xhr.timeout = timeout || 0;
      // eslint-disable-next-line func-names
      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data as XMLHttpRequestBodyInit);
      }
    });
  };
}

const client = new HTTPTransport();

export const fetcher = (
  url: string,
  options: FetchOptions,
  method: METHODS
): any => {
  const { retries = 1 } = options;

  if (retries === 0) {
    throw new Error("No more attempts");
  }

  return client[method](url, { timeout: 1000 }).catch(() => fetcher(url, { retries: retries - 1 }, method));
};
