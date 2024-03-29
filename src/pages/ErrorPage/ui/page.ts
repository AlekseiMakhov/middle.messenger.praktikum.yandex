import Block from '../../../shared/ui/Block';
import tpl from './tpl';
import { Props } from '../types';
import { children } from '../config';
import { createChildren } from '../../../shared/lib';
import { components } from '../../../shared/ui';

export class Page extends Block {
  constructor(props: Props) {
    super('section', props);
  }

  protected created() {
    this.children = createChildren(components, children);
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
