<template>
    <div>
        <a-button @click="()=>$refs.iconSelect.visible=true" type="primary">选择小图标</a-button>
        <p><b>当前选择的小图标:</b><i :class="`icon icon-${icon}`"></i></p>
        <code-view v-model="code"></code-view>
        <icon-select @afterSelected="afterSelected" ref="iconSelect"></icon-select>

    </div>
</template>

<script>
    import CodeView from "@/components/CodeView/CodeView.vue";
    export default {
        name: "IconSelectPage",
        components:{
            CodeView
        },
        data(){
            return {
                icon:"",
                code:`<icon-select @afterSelected="afterSelected" ref="iconSelect"></icon-select>`
            }
        },
        methods:{
            afterSelected(value){
                console.log(value)
                this.icon = value;
            }
        }
    }
</script>

<style scoped>

</style>
