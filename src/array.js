import {def} from './utils'

// 得到Array.prototype
const arrayPrototype = Array.prototype;

// 以Array.prototype为原型创建arrayMethods对象
export const arrayMethodsObject = Object.create(arrayPrototype);

const methodsNeedChange = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
]

methodsNeedChange.forEach(methodName => {
    // 备份原来的方法
    const originalMethod = arrayMethodsObject[methodName]
    def(arrayMethodsObject,methodName,function() {

        const args = [...arguments]

        const result = originalMethod.apply(this,args)

        const ob = this.__ob__

        let inserted;

        switch(methodName) {
            case 'push':
            case 'unshift':
                inserted = args;
                break;
            case 'splice':
                inserted = args.slice(2)
                break;
        }

        // 如果有插入的新项，把新项也变成响应式的。
        if(inserted) {
            ob.observeArray(inserted)
        }

        ob.dep.notify()

        return result;
    },false)
})