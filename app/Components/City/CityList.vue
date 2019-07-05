<template>
    <div class="cityListPage" ref="cityListPage">
        <div class="search-bar">
            <i class="i-search"></i>
            <form action="javascript: return false;">
                <input type="search" autocomplete="off" placeholder="请输入城市名" v-model="searchMsg">
            </form>
            <i class="i-close"></i>
        </div>
        <div class="all-city-list">
            <div class="city-item-list" v-for="(list, word, index) in cityList" :key="index">
                <div class="capitalWord">{{word}}</div>
                <ul>
                    <li class="city" v-for="(city, index) in list" :key="index">{{city.name}} </li>
                </ul>
            </div>
        </div>
        <div class="fast-sel-list">
            <ul>
                <li class="fast-word" v-for="(list, word, index) in cityList" :key="index">{{word}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import {cityList} from "../../common/city.js"
// console.log(cityList)
export default {
    name: "City",
    props: {
        cName: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            searchMsg: '',
            cityList: cityList
        }
    },
    methods: {
        // fastMove(e) {
        //     console.log(e)
        // }
        // selectCity(e) {

        // }
    },
    
}
</script>

<style lang="scss" scoped>
@import "../../css/reset.scss";
.cityListPage { 
    width: 100%;
    background: #fff;
    .search-bar {
        padding: 25px 0;
        form {
            flex: 1 0 auto;
            input {
                // width: 750px;
                height: 55px;
                margin: 0 20px;
                padding: 0 27px;
                border: 0;
                border-radius: 27.5px;
                // box-sizing: margin-box;
                // position: relative;
                // top: -3px;
                outline: none;
                appearance: textfield;
                color: #999999;
                background-color: #eeeeee;
                text-indent: 5px;
                font-size:100%;
            }
            // input[type="search"]::-webkit-search-cancel-button {
            //     display: none;
            // }
        }
       
    }
    .all-city-list {
        .city-item-list{
            .capitalWord {
                background-color: #F5F4F9;
                height: 50px;
                line-height: 50px;
                padding-left: 56px;
                font-size: 12px;
                font-family: "Microsoft Yahei";
            }
            ul{
                padding: 0 20px;
                .city {
                    height: 102px;
                    line-height: 102px;
                    padding-left: 23px;
                    color: #000;
                    font-size: 28px;
                    font-family: "Microsoft Yahei";
                    border-bottom: 1px solid #EEEEEE;
                }

            }
            
        }
    }
    .fast-sel-list {
        position: fixed;
        top: 200px;
        right: 0;
        width: 50px;
        text-align: center;
        .fast-word {
            height: 40px;
            line-height: 40px;
            color: #999999;
            font-size: 28px;
        }
        .fastSelActive {
            color: #F28300;
        }
    }
}
</style>
