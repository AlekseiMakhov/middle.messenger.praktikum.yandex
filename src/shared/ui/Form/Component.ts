import Block from '../Block';
import tpl from './tpl';
import { createChildren, handleSubmit } from '../../lib';
import { components } from '../index';

export class Form extends Block {
  constructor(props: Record<string, unknown>, private _model: Record<string, string>) {
    super('form', props);
  }

  getModel() {
    return this._model;
  }

  protected created() {
    this.children = createChildren(components, this.props.children);

    this.setProps({
      ...this.props,
      events: {
        submit: (e: SubmitEvent) => {
          const { model, errors } = handleSubmit(e, this.getModel(), this.props.children.formElements);
          if (errors.length) {
            console.error(errors);
          } else {
            console.log(model);
          }
        }
      }
    });
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
