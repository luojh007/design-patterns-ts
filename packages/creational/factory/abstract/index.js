"use strict";

var _class = require("../class");

/**
 * 抽象工厂模式
 * 1. 能够创建 一组 具有功能类型的当个工厂的方法
 */
class MyJSModule extends _class.JSModule {
  owner() {
    return 'The module is owner me';
  }

}

class MyCssModule extends _class.CssModule {
  owner() {
    return 'The module is owner me';
  }

}

class MyFactory {
  createCssModule(path, name) {
    return new MyCssModule(path, name);
  }

  createJSModule(path, name) {
    return new MyJSModule(path, name);
  }

}

const myF = new MyFactory();
