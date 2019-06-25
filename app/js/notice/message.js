/* eslint-disable eslint-comments/disable-enable-pair *//* eslint-disable linebreak-style */
/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable no-var */
/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
/* eslint-disable comma-dangle */
// 动态渲染Notice
import Vue from "vue"
import Notice from "../../Components/notice/Notice.vue"

Notice.newInstance = () => {
    // var props = properties || {}
    var Instance = new Vue({
        render: (h) => h(Notice)
    })
    var component = Instance.$mount() // 通过js动态渲染
    document.body.appendChild(component.$el) // 挂载到body上
    var notice = component.$children[0] // 拿到该实例使用的Notice组件
    return {
        add(notices) {
            console.log(notice)
            notice.add(notices)
        },
        remove(id) {
            notice.remove(id)
        }
    }
}

export default Notice
