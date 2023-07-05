import { ButtonProps, HeaderProps } from '../index';

export type FormProps = {
  component: string;
  attrs: {
    class: string;
  };
  children: {
    header?: HeaderProps;
    formElements: Record<string, unknown>[];
    confirmButton: ButtonProps;
  }
  formElementsClass?: string;
};
