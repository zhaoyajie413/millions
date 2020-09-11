<template>
    <div>
        <a-button @click="handelClick">点击</a-button>
    </div>
</template>

<script>
    export default {
        name: "main",
        methods:{
            handelClick(){
                window.open("/dropInputPage", "", "width=800,height="+window.innerHeight)
            }
        },
        mounted() {

        }
    }
</script>

<style scoped>

</style>
