<template>
    <div>
        <p> <strong>基于ant-design-vue封装的业务组件集</strong>开发中。作者很菜，谨慎使用。</p>
        <h3>安装</h3>
        <code-view v-model="code_01"></code-view>
        <h3>使用</h3>
        <code-view v-model="code_02"></code-view>
        <!--<a-button @click="handelClick">点击</a-button>-->
    </div>
</template>

<script>
    import CodeView from "@/components/CodeView/CodeView.vue";
    export default {
        name: "main",
        components:{
            CodeView
        },
        data(){
          return {
              code_01:"npm i --s-d millions-pc",
              code_02:"import millions from \"millions-pc\";\n" +
                  "import \"millions-pc/build/css/main.css\"\n" +
                  "Vue.use(millions);"
          }
        },
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
