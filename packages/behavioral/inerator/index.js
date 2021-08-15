"use strict";

/**
 * 迭代器模式，惰性加载
 */
class MyCommonSet {
  constructor(data) {
    this.data = data;
    this.index = 0;
    this.current = null;
    this.capcity = data.length;
  }

  iterator() {
    return {
      next: () => ({
        value: this.index > this.capcity ? undefined : this.data[this.index++],
        done: this.index >= this.capcity
      })
    };
  }

}

const myset = new MyCommonSet([2, 3, 1, 5]);
let it = myset.iterator();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
