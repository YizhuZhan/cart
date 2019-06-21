<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
export default {
    name: "KForm",
    provide() {
        return {
            form: this
        }
    },
    props: {
        model: {
            type: Object,
            required: true
        },
        rules: {
            type: Object
        }
    },
    data() {
        return {

        }
    },
    methods: {
        validate(cb) {
            let count = 0
            const tasks = this.$children.filter(item => item.prop) // 所有子组件中具有prop属性的
            .map((item) => item.validate(
                error => {
                    if(!error) count++ // 校验正确，则count++
                })
            )
            if(tasks.length == count) { // 全部正确，回调参数返回true
                cb(true)
            } else {
                cb(false)
            }
        }
    },
}
</script>