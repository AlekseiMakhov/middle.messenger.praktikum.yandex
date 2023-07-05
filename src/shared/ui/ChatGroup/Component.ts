import tpl from './tpl';
import Block from '../Block';
import { ChatGroupProps } from './types';

export class Component extends Block<ChatGroupProps> {
  constructor(props: ChatGroupProps) {
    super('li', props);
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
