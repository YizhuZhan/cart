<template>
    <div id="cart">
        <div class="title-box">
            <div class="title">购物车</div>
            <div class="checkout-title">
                <div class="t-info">商品信息</div>
                <div class="t-price">商品金额</div>
                <div class="t-amount">商品数量</div>
                <div class="t-total">总金额</div>
                <div v-if="isEdit" class="i-edit">编辑</div>
                <div v-else class="i-del">删除</div>
                <div v-if="!isEdit" class="i-ok">完成</div>
            </div>
        </div>
        <cart-item v-for="item in itemList" :key="item.id"></cart-item>
    </div>
</template>

<script>
import cartItem from "../Cart/CartItem"
export default {
    components: {'cart-item': cartItem},
    data() {
        return {
            itemList: [{id:1}, {id:2}],
            isEdit: true,
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../css/reset.scss";

#cart {
    padding: 69px 0 54px 0;
    .title-box {
        text-align: center;
        font-size: 18px;
        .title {
            position: relative;
            background: #fff;
            margin-bottom: 41px;
            &:before {
                position: absolute;
                top: 50%;
                left: 0;
                content: "";
                width: 100%;
                height: 1px;
                background: #ccc;
                box-sizing: border-box;
                z-index: 0;
            }
        }
        .checkout-title {
            display: flex;
            align-items: center;
            justify-content: space-around;
            height: 60px;
            line-height: 30px;
            background: #666;
            font-size: 16px;
            color: #fff;
            div {
                text-align: center;
                padding: 0 5px;
                &:first-child {
                    padding: 0 20px;
                }   
            }
        }
    }
}
</style>
