import tpl from "./tpl";
import Block from "../Block";
import type { MessageInputProps } from "./types";

export class Component extends Block<MessageInputProps> {
  constructor(props: MessageInputProps) {
    super("div", props);
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
