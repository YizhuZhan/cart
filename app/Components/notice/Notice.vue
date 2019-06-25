<template>
    <div class="alert-box">
        <div class="alert-content" v-for="item in notices" :key="item.id">{{item.content}}</div>
    </div>
</template>

<style lang="scss">
.alert-box {
    position: fixed;
    top: 16px;
    left: 100px;
    .alert-content {
        width: 200px;
        padding: 8px 16px;
        border:blue 3px solid;
        margin-bottom: 8px;
        border-radius: 3px;
        background: #fff;
        text-align: center;
        font-size: 14px;
    }
}    
</style>

<script>
let seed = 0
export default {
    name: "Notice",
    data() {
        return {
            notices: []
        }
    },
    methods: {
        add(notice) {
            let id = 'k_' + (seed++)
            this.notices.push(Object.assign(notice, {id})) // 这里的配置不支持{...notice, id}
            setTimeout(() => {
                this.remove(notice.id)
            }, notice.duration * 1000)
        },
        remove(id) {
            this.notices = this.notices.filter(item => item.id != id)
        }
    }
}
</script>
