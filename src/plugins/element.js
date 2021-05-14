import Vue from 'vue'

//按需导入element-ui组件
import {
    Button,
    Form,
    FormItem,
    Input,
    Message
} from 'element-ui'


Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
/* 将弹框组件挂载为vue原型上的一个属性并且自己起个名字为$message
这样每个组件中都能使用this.$message的一系列弹窗方法 */
Vue.prototype.$message = Message
