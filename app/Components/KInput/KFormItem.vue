<template>
    <div>
        <label v-if="label">{{label}}</label>
        <slot></slot>
        <p v-if="error" style="color:red">
            {{error}}
        </p>
    </div>
</template>

<script>
import Schema from 'async-validator'

export default {
    name: "KFormInput",
    props: {
        label: {
            type: String
        },
        prop: { // 对什么进行校验
            type: String
        }
    },
    data() {
        return {
            error: '' // 内部数据
        }
    },
    inject: ['form'],
    mounted() {
        this.$on('validate', this.validate) // 监听到validate事件，则执行自身validate方法
    },
    methods: {
        validate(cb=()=>{}) { // 借助async-validator中的校验器进行校验
            const rules = this.form.rules[this.prop] // 从父组件获取校验规则
            const value = this.form.model[this.prop] // 从父组件获取数据模型
            const descriptor = {[this.prop]: rules} // 组成校验器可用的校验对象
            const schema = new Schema(descriptor) // 创建校验器实例
            schema.validate({[this.prop]:value}, errors => {
                if(errors) {
                    this.error = errors[0].message
                } else {
                    this.error = ''
                }
            })
            cb(this.error)
        }
    },
}
</script>
