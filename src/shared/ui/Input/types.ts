import { TValidationOption } from '../../lib';

export type InputProps = {
  component: string;
  attrs: {
    id?: string;
    name?: string;
    placeholder?: string;
    type?: string;
    label?: string;
    class?: string;
    autocomplete?: boolean;
  };
  validation: TValidationOption[];
  events: {
    blur: (e: MouseEvent) => void;
    focus: (e: MouseEvent) => void;
  };
};
