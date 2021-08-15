/**
 * 抽象工厂模式
 * 1. 能够创建 一组 具有功能类型的当个工厂的方法
 */


import { JSModule, CssModule } from '../class'

class MyJSModule extends JSModule {
    owner() {
        return 'The module is owner me'
    }
}
class MyCssModule extends CssModule {
    owner() {
        return 'The module is owner me'
    }
}

interface Factory {
    createJSModule(path: string, name: string)
    createCssModule(path: string, name: string)
}

class MyFactory implements Factory {
    createCssModule(path, name) {
        return new MyCssModule(path, name)
    }
    createJSModule(path, name) {
        return new MyJSModule(path, name)
    }
}

const myF = new MyFactory()
