export type ButtonProps = {
  component: string;
  attrs: {
    class: string;
    type: string;
  };
  label: string;
  events?: {
    click: (e: MouseEvent) => void;
  };
};
