/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable no-new */
/* eslint-disable comma-dangle */
import Vue from "vue"
import Home from "../Components/Home.vue"
import router from "./router.js"

const root = document.createElement("div")
document.body.appendChild(root)

new Vue({
    router,
    components: { Home },
    template: "<Home></Home>"
}).$mount(root)
