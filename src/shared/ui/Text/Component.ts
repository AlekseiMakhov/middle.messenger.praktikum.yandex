import Block from '../Block';
import tpl from './tpl';
import { TextProps } from './types';

export class Component extends Block<TextProps> {
  constructor(props: TextProps) {
    super('p', props);
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
