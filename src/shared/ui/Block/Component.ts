import Handlebars from "handlebars";
import { v4 as uuid } from "uuid";
import { CB, cloneDeep, EventBus, isEqualProps } from "../../lib";
import { Nullable } from "../../types";
import { TMeta } from "./types";

export abstract class Component<P extends Record<string, unknown> = any> {
  static HOOKS = {
    CREATED: "created",
    MOUNTED: "flow:mounted",
    BEFORE_UPDATE: "flow:before-update",
    RENDER: "flow:render",
  } as const;

  public id: string = uuid();

  _element: Nullable<HTMLElement> = null;

  _meta: Nullable<TMeta<P>>;

  public eventBus: () => EventBus;

  public tagName: keyof HTMLElementTagNameMap = "div";

  protected children: Record<string, Component | Component[]>;

  protected props: P;

  protected constructor(
    tagName: keyof HTMLElementTagNameMap = "div",
    propsWithChildren: P
  ) {
    const eventBus = new EventBus();

    const { props, children } = this._getPropsAndChildren(propsWithChildren);

    this._meta = { tagName, props: props as P };

    this.props = this._makeProxyProps(props);

    this.children = children;
    this.eventBus = () => eventBus;
    this._registerEvents(eventBus);
    eventBus.emit(Component.HOOKS.CREATED);
  }

  // hooks
  private _beforeUpdate(oldProps: P, newProps: P) {
    const response = this.beforeUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this.eventBus().emit(Component.HOOKS.RENDER);
  }

  protected beforeUpdate(oldProps: P, newProps: P) {
    return !isEqualProps(oldProps, newProps);
  }

  private _getPropsAndChildren(propsWithChildren: P): {
    children: Record<string, Component | Component[]>;
    props: P;
  } {
    const props: Record<string, unknown> = {};
    const children: Record<string, Component | Component[]> = {};

    Object.entries(propsWithChildren || []).forEach(([key, value]) => {
      if (value instanceof Component) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props: props as P };
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Component.HOOKS.CREATED, this._created.bind(this));
    eventBus.on(Component.HOOKS.MOUNTED, this._mounted.bind(this));
    eventBus.on(Component.HOOKS.BEFORE_UPDATE, this._beforeUpdate.bind(this) as CB);
    eventBus.on(Component.HOOKS.RENDER, this._render.bind(this));
  }

  private _createResources() {
    const { tagName } = <TMeta<P>>this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  _created() {
    this._createResources();
    this.created();

    this.eventBus().emit(Component.HOOKS.RENDER);
  }

  protected created() {}

  private _mounted() {
    this.mounted();
  }

  protected mounted() {}

  public dispatchMounted() {
    this._mounted();

    Object.values(this.children).forEach((child) => {
      if (Array.isArray(child)) {
        child.forEach((el) => {
          el.dispatchMounted();
        });
      } else {
        child.dispatchMounted();
      }
    });
  }

  compile(template: string, context: any) {
    const contextAndStubs = cloneDeep(context);

    Object.entries(this.children).forEach(([name, component]) => {
      if (Array.isArray(component)) {
        contextAndStubs[name] = component.map(
          (el) => `<div data-id='${el.id}'></div>`
        );
      } else {
        contextAndStubs[name] = `<div data-id='${component.id}'></div>`;
      }
    });

    const html = Handlebars.compile(template)(contextAndStubs);

    const tpl = document.createElement("template");

    tpl.innerHTML = html;

    Object.values(this.children).forEach((component) => {
      if (Array.isArray(component)) {
        component.forEach((elem) => {
          const stub = tpl.content.querySelector(`[data-id='${elem.id}']`);

          if (!stub) {
            return;
          }

          const { attrs = {} } = elem.props;

          Object.entries(attrs).forEach(([key, value]) => {
            elem.getContent()?.setAttribute(key, value as string);
          });

          this._addEvents(elem.getContent() as HTMLElement);

          elem.getContent()?.append(...Array.from(stub.childNodes));

          stub.replaceWith(elem.getContent()!);
        });
      } else {
        const stub = tpl.content.querySelector(`[data-id='${component.id}']`);

        const attrs = component.props?.attrs || {};

        if (!stub) {
          return;
        }

        Object.entries(attrs).forEach(([key, value]) => {
          component.getContent()?.setAttribute(key, value as string);
        });

        this._addEvents(component.getContent() as HTMLElement);

        component.getContent()?.append(...Array.from(stub.childNodes));
        stub.replaceWith(component.getContent()!);
      }
    });

    return tpl.content;
  }

  public setProps = (nextProps: P) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);

    // console.log(this.props);
  };

  private _addEvents(target: HTMLElement) {
    const { events = {} } = this.props as P & {
      events: Record<string, () => void>;
    };

    Object.entries(events).forEach(([name, cb]) => {
      const element = target.querySelector("[data-events]");

      // const ev = element?.getAttribute("data-events");

      // console.log(ev);

      if (element) {
        element.addEventListener(name, cb);
      }

      this._element?.addEventListener(name, cb);
    });
  }

  private _removeEvents(target: HTMLElement) {
    const { events = {} } = this.props as P & {
      events: Record<string, () => void>;
    };

    Object.entries(events).forEach(([name, cb]) => {
      const element = target.querySelector("[data-events]");

      if (element) {
        element.removeEventListener(name, cb);
      }
      this._element?.removeEventListener(name, cb);
    });
  }

  private _render() {
    const fragment = this.render();
    this._removeEvents(this._element!);
    this._element!.innerHTML = "";
    this._element!.append(fragment as Node);
    this._addEvents(this._element!);
  }

  protected render(): Node | void {}

  getContent() {
    return this.element;
  }

  get element() {
    return this._element;
  }

  private _makeProxyProps(props: P) {
    const self = this;
    return new Proxy(props, {
      get(target: any, p: string): any {
        const value = target[p];
        return typeof value === "function" ? value.bind(target) : value;
      },

      set(target, p: string, value): boolean {
        const oldTarget = cloneDeep(target);

        target[p as keyof P] = value;

        self.eventBus().emit(Component.HOOKS.BEFORE_UPDATE, oldTarget, target);
        return true;
      },

      deleteProperty() {
        throw new Error("Property deletion prohibited");
      },
    });
  }

  private _createDocumentElement(tagName: keyof HTMLElementTagNameMap) {
    return document.createElement(tagName);
  }

  public show() {
    this.getContent()!.style.display = "block";
  }

  public hide() {
    this.getContent()!.style.display = "none";
  }
}
