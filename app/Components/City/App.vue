<template>
    <div id="app">
        <v-header></v-header>
        
        <router-view :cName="cName" class="app-router"></router-view>
        
    </div>
</template>

<script>
// import City from "./City.vue"
import Header from "./Header.vue"

export default {
    name: "AppCity",
    components: { 
        // City,
        "v-header": Header
    },
    data() {
        return {
            cName: "正在定位"
        }
    }
}
</script>

<style lang="scss">
#app {
    .app-router {
        margin-top: 88px;
        position: absolute;
        // bottom: 0;
        // top: 0;
        // background-color: #F5F4F9;
    }
}
</style>