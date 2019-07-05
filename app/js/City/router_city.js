/* eslint-disable eslint-comments/disable-enable-pair *//* eslint-disable linebreak-style */
import Vue from "vue"
import Router from "vue-router"
import Index from "../../Components/City/Index.vue"
import CityList from "../../Components/City/CityList.vue"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "cityIndex",
            component: Index,
            meta: {
                hasBack: false,
            },
        },
        {
            path: "/cityList",
            name: "cityList",
            component: CityList,
            meta: {
                hasBack: true,
            },
        },
    ],
})
