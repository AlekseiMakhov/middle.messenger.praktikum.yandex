import Block from "../../../shared/ui/Block";
import tpl from "./tpl";
import { RegisterProps } from "../types";
import { children } from "../config";
import { createChildren } from "../../../shared/lib";
import { components } from "../../../shared/ui";

export class RegisterPage extends Block {
  model = {};
  constructor(props: RegisterProps) {
    super("section", props);
  }

  protected created() {
    this.children = createChildren(components, children);
  }

  protected handleSubmit() {}

  render() {
    return this.compile(tpl, this.props);
  }
}
