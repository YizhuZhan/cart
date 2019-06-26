<template>
    <ul >
        <li @click="toggleExpand">{{data.title}}</li>
        <!-- v-for具有更高优先级，不推荐v-if和v-for一起使用 -->
        <Node v-if="showSub" v-for="(item, index) in data.children" :key="index" :data="item"></Node>
    </ul>
</template>

<script>
export default {
    name: "Node",
    props: ['data'],
    data() {
        return {
            showSub: true
        }
    },
    methods: {
        toggleExpand(e) {
            this.showSub = !this.showSub
        }
    }
}
</script>
