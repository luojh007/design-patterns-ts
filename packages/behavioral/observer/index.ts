/**
 * 观察者模式
 */



interface Observer {
    // 观察主题改变时，触发更新方法
    update(topic: string)
}

class ObserverAnimale implements Observer {
    update(topic) {
        console.log(`I have seen a ${topic}!`)
        return `I have seen a ${topic}!`
    }
}

interface Subject {
    // 增加观察者
    add(ob: Observer)
}

class SubjectAboutDog implements Subject {
    obs: Set<Observer>
    type: string
    constructor() {
        this.obs = new Set()
        this.type = 'dog'
    }
    add(ob) {
        this.obs.add(ob)
    }
    delete(ob) {
        this.obs.delete(ob)
    }
    notifly() {
        for (let observer of this.obs) {
            observer.update(this.type)
        }
    }
}

const observer1 = new ObserverAnimale()
const observer2 = new ObserverAnimale()

const subdog = new SubjectAboutDog()

subdog.add(observer1)
subdog.add(observer2)
subdog.notifly()
