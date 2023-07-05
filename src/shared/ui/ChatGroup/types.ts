export type ChatGroupProps = {
  component: string;
  attrs: {
    class: string;
  };
  timestamp: string;
  text: string;
  name: string;
  count: string;
  selected: boolean;
  avatar: {
    src: string;
    alt: string;
  };
};
