import tpl from './tpl';
import Block from '../Block';
import type { InputProps } from './types';
import { blur, focus } from '../../lib';

export class Component extends Block<InputProps> {
  constructor(props: InputProps) {
    super('div', props);
  }

  protected created() {
    this.props.events = {
      blur: (e: FocusEvent) => blur(e, this.props.validation),
      focus: (e: FocusEvent) => focus(e),
    };
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
