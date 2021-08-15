"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _class;

/**
 * 装饰器模式
 */
function sealed(constructor) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

let Compliation = sealed(_class = class Compliation {
  constructor() {
    (0, _defineProperty2.default)(this, "name", void 0);
    this.name = '编译器名字';
  }

  resolve() {
    return '解析函数';
  }

  getName() {
    return this.name;
  }

}) || _class;

Compliation.prototype.name = '2';
