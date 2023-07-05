import tpl from './tpl';
import Block from '../Block';
import type { SearchProps } from './types';

export class Component extends Block<SearchProps> {
  constructor(props: SearchProps) {
    super('div', props);
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
