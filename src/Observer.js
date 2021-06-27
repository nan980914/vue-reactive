import { def } from "./utils";
import defineReactive from './defineReactive'

export default class Observer {
  constructor(value) {
    console.log("我是observer构造器", value);
    def(value,'__ob__',this,false)
    this.walk(value)
  }

  // 遍历
  walk(value) {
      for(let k in value) {
          defineReactive(value,k)
      }
  }
}
