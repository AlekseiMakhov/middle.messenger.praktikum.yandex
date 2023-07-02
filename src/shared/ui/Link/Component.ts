import tpl from "./tpl";
import Block from "../Block";
import { LinkProps } from "./types";

export class Component extends Block<LinkProps> {
  constructor(props: LinkProps) {
    super("div", props);
  }
  render() {
    return this.compile(tpl, this.props);
  }
}
