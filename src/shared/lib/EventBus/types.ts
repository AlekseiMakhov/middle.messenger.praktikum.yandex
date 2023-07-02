export type TPrimitiveType = string | number | boolean;

export type Events = "click" | "input" | "change";

export type TReturnType =
  | TPrimitiveType
  | TPrimitiveType[]
  | object
  | null
  | undefined
  | void;

export type CB = (...args: TReturnType[]) => unknown;

export interface IEvents {
  [key: string]: CB[] | [];
}
