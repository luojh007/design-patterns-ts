/**
 * 工厂方法模式
 */

import { JSModule, CssModule } from '../class'


// 工厂类 接口
interface ModuleFactory {
    create(path: string, name: string): string
}

//1. 获取js模块
class JSFactory implements ModuleFactory {
    create(path, name) {
        const module = new JSModule(path, name)
        return module.resolve()
    }
}

//2. 获取css模块
class CssFactory implements ModuleFactory {
    create(path, name) {
        const module = new CssModule(path, name)
        return module.resolve()
    }
}

const jsFactor = new JSFactory()
const cssFactor = new CssFactory()
console.log(jsFactor.create('./a.js', 'moduleA'))
console.log(cssFactor.create('./b.style', 'b'))

