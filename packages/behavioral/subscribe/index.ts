/**
 * 发布、订阅模式
 */

interface Subscribe {
    tap(topic: string, fn: Function)
    call(topic: string)
}

class SubscribeA implements Subscribe {
    events: Map<string, Set<Function>>
    constructor() {
        this.events = new Map()
    }
    tap(topic, fn) {
        if (this.events.get(topic)) {
            this.events.get(topic).add(fn)
        } else {
            this.events.set(topic, new Set([fn]))
        }
    }
    call(topic) {
        for (let fn of this.events.get(topic)) {
            fn()
        }
    }
}

let sb = new SubscribeA()
sb.tap('click', () => { console.log('我点击了') })
sb.tap('mousemove', () => { console.log('我鼠标移动了') })

sb.call('click')
