import tpl from './tpl';
import Block from '../Block';
import { HeaderProps } from './types';

export class Component extends Block<HeaderProps> {
  constructor(props: HeaderProps) {
    super('h3', props);
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
