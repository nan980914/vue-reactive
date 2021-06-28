import { def } from "./utils";
import defineReactive from "./defineReactive";
import { arrayMethodsObject } from "./array";
import observe from "./observe";
import Dep from "./Dep";

// 将一个正常的object对象转换为每个层级的属性都是响应式的。
export default class Observer {
  constructor(value) {
    // this是这次new的实例
    // 每一个Observer的实例身上，都有一个dep
    this.dep = new Dep()
    def(value, "__ob__", this, false);
    if (Array.isArray(value)) {
      Object.setPrototypeOf(value, arrayMethodsObject);
      this.observeArray(value);
    } else {
      this.walk(value);
    } 
  }

  // 遍历
  walk(value) {
    for (let k in value) {
      defineReactive(value, k);
    }
  }

  // 数组的特殊遍历
  observeArray(arr) {
    for (let i = 0, l = arr.length; i < l; i++) {
      // 逐项进行observe
      observe(arr[i]);
    }
  }
}
