<template>
    <div>
        <h4>{{title}}</h4>
        <!-- {{model.username}}
        <k-input k-input v-model="model.username"></k-input> -->

        <k-form :model="model" :rules="rules" ref="loginForm">
            <k-form-item label="用户名" prop="username">
                <k-input v-model="model.username" ></k-input>
            </k-form-item>
             <k-form-item label="确认密码" prop="password">
                <k-input type="password" v-model="model.password" ></k-input>
            </k-form-item>
            <k-form-item>
                <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
            </k-form-item>
        </k-form>
    </div>
</template>

<script>
import KInput from "./KInput.vue"
import KFormItem from "./KFormItem.vue"
import KForm from "./KForm.vue"

export default {
    name: 'app',
    data() {
        return {
            title: "- 仿照Element UI自定义表单组件",
            model: {username:'aaa', password: ''},
            rules: {
                username:[
                    {required:true, message:'请输入用户名'}
                ],
                password:[
                    {required:true, message:'请输入密码'}
                ]
            }
        }
    },
    components: {
        KForm,
        KFormItem,
        KInput,
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if(valid) {
                    alert("校验成功")
                } else {
                    alert("校验失败")
                }
            })
        }
    }
}
</script>
