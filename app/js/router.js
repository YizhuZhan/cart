/* eslint-disable eslint-comments/disable-enable-pair *//* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
import Vue from "vue"
import Router from "vue-router"
// import Home from "../Components/Home.vue"
import Cart from "../Components/Cart.vue"
import AddList from "../Components/AddList.vue"

Vue.use(Router)

export default new Router({
    routes: [
        // {
        //     path: "/",
        //     name: "home",
        //     component: Home
        // },
        {
            path: "/shoppingCart",
            name: "cart",
            component: Cart
        },
        {
            path: "/addressList",
            name: "addList",
            component: AddList
        }
    ]
})