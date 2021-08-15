"use strict";

/**
 * 观察者模式
 */
class ObserverAnimale {
  update(topic) {
    console.log(`I have seen a ${topic}!`);
    return `I have seen a ${topic}!`;
  }

}

class SubjectAboutDog {
  constructor() {
    this.obs = new Set();
    this.type = 'dog';
  }

  add(ob) {
    this.obs.add(ob);
  }

  delete(ob) {
    this.obs.delete(ob);
  }

  notifly() {
    for (let observer of this.obs) {
      observer.update(this.type);
    }
  }

}

const observer1 = new ObserverAnimale();
const observer2 = new ObserverAnimale();
const subdog = new SubjectAboutDog();
subdog.add(observer1);
subdog.add(observer2);
subdog.notifly();
