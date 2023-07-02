export type TMeta<P> = {
  tagName: keyof HTMLElementTagNameMap;
  props: P;
};
