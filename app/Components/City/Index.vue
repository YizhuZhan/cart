<template>
    <div class="index">
        <div class="intro">
             选择城市前，会自动定位当前城市<br/>
            选择城市后，会取消对当前城市的自动定位
        </div>
        <div class="address-bar">
            <div>选择地址</div>
            <!-- <div>{{cName}} ></div> -->
            <router-link tag="span" :to="{name: 'cityList'}">{{cName}} ></router-link> 
        </div>
    </div>
</template>

<script>

export default {
    props: ['cName'],
    data() {
        return {
            
        }
    },
    methods: {
        
    },
}
</script>

<style lang="scss">
.index {
    width:100%;
    .intro {
        padding: 30px;
        font-size: 30px;
        background: #fff;
        border-bottom: 1px solid #ccc;
    }
    .address-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 30px;
        background: #fff;
    }
    .all-city-list {

    }
}

    
</style>
