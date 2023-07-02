import tpl from './tpl';
import Block from '../Block';
import { MessageProps } from './types';

export class Component extends Block<MessageProps> {
  constructor(props: MessageProps) {
    super('div', props);
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
