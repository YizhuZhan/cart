/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable node/no-unpublished-import */
/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable no-new */
/* eslint-disable comma-dangle */
import Vue from "vue"
import ElementUI from "element-ui"
import pageAjust from "../common/viewport.js"

Vue.use(ElementUI)
Vue.use(pageAjust)

const root = document.createElement("div")
document.body.appendChild(root)

// dispatch扩展, 用mixin更优雅
Vue.prototype.$dispatch = function(eventName, data) {
    let parent = this.$parent
    while (parent) {
        parent.$emit(eventName, data)
        parent = parent.$parent // 直到没有parent 退出
    }
}

// demo1: Cart
/* import Home from "../Components/Cart/Home.vue"
import router from "./Cart/router_cart.js"

new Vue({
    router,
    components: { Home },
    template: "<Home></Home>"
}).$mount(root)
*/

// demo2: KInput
// import AppKInput from "../Components/KInput/App.vue"

// new Vue({
//     render: (h) => h(AppKInput)
// }).$mount(root)


// demo3: Notice
// import AppNotice from "../Components/notice/App.vue"

// new Vue({
//     render: (h) => h(AppNotice)
// }).$mount(root)
// // 将notice挂载到全局
// import notice from "./notice/notice.js"
// Vue.prototype.$notice = notice


// demo4: 递归组件
// import AppRecursion from "../Components/recursion/App.vue"

// new Vue({
//     render: (h) => h(AppRecursion)
// }).$mount(root)


// demo5: 城市选择
import AppCity from "../Components/City/App.vue"
import router from "./City/router_city.js"

new Vue({
    router,
    render: (h) => h(AppCity)
}).$mount(root)
