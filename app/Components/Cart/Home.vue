<template>
    <div id="home">
        <tabs></tabs>
        <router-view></router-view>
    </div>
</template>

<script>
import tabs from "./tabs.vue"

export default {
    name: "Home",
    components: {
        tabs
    },    
}
</script>

<style scoped>

</style>
