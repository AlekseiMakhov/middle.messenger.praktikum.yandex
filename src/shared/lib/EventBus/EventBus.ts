import type {
  CB, IEvents, Events, TReturnType,
} from './types';

export class EventBus {
  listeners: IEvents;

  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: CB) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback as never);
  }

  off(event: Events, callback: CB) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      (listener: CB) => listener !== callback,
    );
  }

  emit(event: string, ...args: TReturnType[]) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event].forEach((listener) => {
      listener(...args);
    });
  }
}
