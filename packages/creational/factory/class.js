"use strict";
/**
 * 共用的类
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.CssModule = exports.JSModule = void 0;
var Module = /** @class */ (function () {
    function Module(path, name, type) {
        this.path = path;
        this.name = name;
        this.type = type;
    }
    return Module;
}());
var JSModule = /** @class */ (function (_super) {
    __extends(JSModule, _super);
    function JSModule(path, name) {
        return _super.call(this, path, name, 'js') || this;
    }
    JSModule.prototype.resolve = function () {
        return "\u6211\u662F\u4E00\u4E2A" + this.type + "\u6A21\u5757\uFF0C\u6211\u7684\u540D\u5B57" + this.name + "\uFF0C\u6765\u81EA" + this.path;
    };
    return JSModule;
}(Module));
exports.JSModule = JSModule;
var CssModule = /** @class */ (function (_super) {
    __extends(CssModule, _super);
    function CssModule(path, name) {
        return _super.call(this, path, name, 'css') || this;
    }
    CssModule.prototype.resolve = function () {
        return "\u6211\u662F\u4E00\u4E2A" + this.type + "\u6A21\u5757\uFF0C\u6211\u7684\u540D\u5B57" + this.name + "\uFF0C\u6765\u81EA" + this.path;
    };
    return CssModule;
}(Module));
exports.CssModule = CssModule;
