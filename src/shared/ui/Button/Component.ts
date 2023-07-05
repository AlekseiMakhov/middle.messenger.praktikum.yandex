import tpl from './tpl';
import Block from '../Block';
import type { ButtonProps } from './types';

export class Component extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
    super('button', props);
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
