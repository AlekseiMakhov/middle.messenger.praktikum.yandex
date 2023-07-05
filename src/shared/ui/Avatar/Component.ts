import tpl from './tpl';
import Block from '../Block';
import type { AvatarProps } from './types';

export class Component extends Block<AvatarProps> {
  constructor(props: AvatarProps) {
    super('div', props);
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
