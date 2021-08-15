"use strict";

/**
 * 发布、订阅模式
 */
class SubscribeA {
  constructor() {
    this.events = new Map();
  }

  tap(topic, fn) {
    if (this.events.get(topic)) {
      this.events.get(topic).add(fn);
    } else {
      this.events.set(topic, new Set([fn]));
    }
  }

  publish(topic) {
    for (let fn of this.events.get(topic)) {
      fn();
    }
  }

}

let sb = new SubscribeA();
sb.tap('click', () => {
  console.log('我点击了');
});
sb.tap('mousemove', () => {
  console.log('我鼠标移动了');
});
sb.publish('click');
