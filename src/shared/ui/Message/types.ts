export type MessageProps = {
  component: string;
  attrs: {
    class: string;
  };
  timestamp: string;
  text?: string;
  image?: {
    src: string;
    alt: string;
  };
  read?: boolean;
  delivered?: boolean;
};
