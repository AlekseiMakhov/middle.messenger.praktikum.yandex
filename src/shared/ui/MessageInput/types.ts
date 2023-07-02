import { TValidationOption } from "../../lib";

export type MessageInputProps = {
  component: string;
  attrs: {
    class: string;
  };
  name: string;
  validation: TValidationOption[];
};
