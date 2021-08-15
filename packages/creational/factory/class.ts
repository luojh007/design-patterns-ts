/**
 * 共用的类
 */

abstract class Module {
    path: string
    name: string
    type: 'js' | 'css'
    constructor(path, name, type) {
        this.path = path
        this.name = name
        this.type = type
    }
    abstract resolve()
}

class JSModule extends Module {
    constructor(path, name) {
        super(path, name, 'js')
    }
    resolve() {
        return `我是一个${this.type}模块，我的名字${this.name}，来自${this.path}`
    }
}
class CssModule extends Module {
    constructor(path, name) {
        super(path, name, 'css')
    }
    resolve() {
        return `我是一个${this.type}模块，我的名字${this.name}，来自${this.path}`
    }
}

export { JSModule, CssModule }
