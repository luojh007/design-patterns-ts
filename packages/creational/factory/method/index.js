"use strict";
/**
 * 工厂方法模式
 */
exports.__esModule = true;
var class_1 = require("../class");
//1. 获取js模块
var JSFactory = /** @class */ (function () {
    function JSFactory() {
    }
    JSFactory.prototype.create = function (path, name) {
        var module = new class_1.JSModule(path, name);
        return module.resolve();
    };
    return JSFactory;
}());
//2. 获取css模块
var CssFactory = /** @class */ (function () {
    function CssFactory() {
    }
    CssFactory.prototype.create = function (path, name) {
        var module = new class_1.CssModule(path, name);
        return module.resolve();
    };
    return CssFactory;
}());
var jsFactor = new JSFactory();
var cssFactor = new CssFactory();
console.log(jsFactor.create('./a.js', 'moduleA'));
console.log(cssFactor.create('./b.style', 'b'));
