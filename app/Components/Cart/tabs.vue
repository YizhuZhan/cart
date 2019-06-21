<template>
<div id="tabs">
    <div>
        <router-link :to="{name: 'cart'}">购物车</router-link>
        <router-link :to="{name: 'addList'}">地址列表</router-link>
    </div>
</div>
</template>

<style lang="scss" scoped>
@import "../../css/reset.scss";

#tabs {
    text-align: center;
    padding: 0 30px;
    background: #000;
    border-radius: 2px;
    // border-shadow: 5px 5px 5px #eee;
    a {
        display: inline-block;
        width:130px;
        height: 40px;
        line-height: 40px;
        font-size: 20px;
        text-align: center;
        color:#fff;
        &:hover {
            color: #f00;
        }
    }
}
</style>