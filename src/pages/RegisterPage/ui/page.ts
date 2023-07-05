import tpl from './tpl';
import { createChildren } from '../../../shared/lib';
import { components } from '../../../shared/ui';
import Form from '../../../shared/ui/Form';

export class RegisterPage extends Form {
  protected created() {
    this.children = createChildren(components, this.props);
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
