/**
 * 简单工厂模式
 * 
 * 1. 将不同对象的创建都在同一个工厂中实现
 */

import { JSModule, CssModule } from '../class'

class Factory {
    type: string
    constructor(type) {
        this.type = type
    }
    create(path, name) {
        switch (this.type) {
            case 'js':
                return new JSModule(path, name)
            case 'css':
                return new CssModule(path, name)
            default:
                return new Error('类型错误')
        }
    }
}

const factory = new Factory('js')
console.log(factory.create('./a.js', 'a'))
