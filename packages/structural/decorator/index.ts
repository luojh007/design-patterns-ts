/**
 * 装饰器模式
 */

function sealed(constructor: Function) {
    Object.seal(constructor)
    Object.seal(constructor.prototype)
}

@sealed
class Compliation {
    name: string
    constructor() {
        this.name = '编译器名字'
    }
    resolve() {
        return '解析函数'
    }
    getName() {
        return this.name
    }
}

// 直接报错！！
Compliation.prototype.name = '2'
