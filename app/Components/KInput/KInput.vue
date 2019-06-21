<template>
    <div>
        <input :type="type" :value="value" @input="onkinput" @blur="onkblur" @keydown.enter="onkblur">
    </div>
</template>

<script>
export default {
    name: "KInput",
    props: { 
        type: {
            type: String,
            default: "text"
        },
        value: {
            type: String, 
            default: ""
        }
    },
    data() {
        return {
            
        }
    },
    methods: {
        onkinput(e) {
            this.$emit("input", e.target.value)
            this.$dispatch("validate")
        },
        onkblur(e) {
            console.log("onblur")
            this.$dispatch("validate")
        }
    },
}
</script>