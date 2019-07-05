<template>
    <div class="v-header clear">
        <div class="back"  @click="goBack" v-if="$route.meta.hasBack">< 返回</div>
        <div class="title">城市选择</div>
    </div>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            
        }
    },
    methods: {
        goBack() {
            this.$router.go(-1)
        }
    },
}
</script>

<style lang="scss">
.clear:after {
    content: "";
    display:block;
    clear:both;
}
.clear { 
    zoom:1;
}
.v-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 88px;
    background-color: #f28300;
    text-align: center;
    color: #fff;
    font: 24px "Microsoft Yahei";
    .back {
        float: left;
        margin-left: 15px;
        height: 88px;
        line-height: 88px;
    }
    .title {
        height:88px;
        line-height: 88px;
    }
}
</style>