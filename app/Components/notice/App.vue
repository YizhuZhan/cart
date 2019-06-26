<template>
    <div>
        <div @click="showMsg">点我</div>
        <!-- <Notice></Notice> 改成动态渲染 -->
    </div>
</template>
 
<script>
// import Notice from "./Notice.vue"
// import Notice from "../../js/notice/message.js"
// import notice from "../../js/notice/notice.js"

export default {
    // components: {
    //     Notice
    // },
    methods: {
        showMsg() {
            // this.$children[0].add({content: "弹弹弹", duration: 20})
            // Notice.newInstance().add({content: "弹弹弹", duration: 20}) // 每次点击都会重新new一个Instance，因此只能看见一个弹出框。需要使用单例模式来控制
            // notice({content: "弹弹弹"})
            // 使用挂载到全局的$notice
            this.$notice({content: "弹弹弹"})
        }
    },
}
</script>
