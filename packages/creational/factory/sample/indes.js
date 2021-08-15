"use strict";
/**
 * 简单工厂模式
 *
 * 1. 将不同对象的创建都在同一个工厂中实现
 */
exports.__esModule = true;
var class_1 = require("../class");
var Factory = /** @class */ (function () {
    function Factory(type) {
        this.type = type;
    }
    Factory.prototype.create = function (path, name) {
        switch (this.type) {
            case 'js':
                return new class_1.JSModule(path, name);
            case 'css':
                return new class_1.CssModule(path, name);
            default:
                return new Error('类型错误');
        }
    };
    return Factory;
}());
var factory = new Factory('js');
console.log(factory.create('./a.js', 'a'));
