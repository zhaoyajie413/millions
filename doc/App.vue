<template>
    <div class="page-wrapper">
        <div class="side-menu">
            <p><router-link to="/">简介</router-link></p>
            <p><router-link to="/TabsCard">卡片内容(布局)</router-link></p>
            <p><router-link to="/multipleText">多行省略</router-link></p>
            <p><router-link to="/enlargeImagePage">图片预览</router-link></p>
            <p><router-link to="/uploadImagePage">图片上传</router-link></p>
            <p><router-link to="/iconSelectPage">小图标选择器</router-link></p>
            <p><router-link to="/dropInputPage">下拉输入框</router-link></p>
            <p><router-link to="/queryScreenPage">查询条件过滤</router-link></p>
            <p><router-link to="/tableDynamicPage">动态表头表格，列宽可申缩</router-link></p>
        </div>

       <div class="page-content">
           <router-view></router-view>
       </div>
    </div>
</template>

<script>

    export default {
        name: "App",
        data(){
            return {
                name:"mayuyu",
                search:{},
            }
        },
        mounted() {
        },
        methods:{
        }
    }
</script>

<style lang="scss">
.page-wrapper{
    width: 100vw;
    min-height: 100vh;
    display: flex;
    .side-menu{
        width: 220px;
        min-height: 100vh;
        box-sizing: border-box;
        padding: 10px 12px;
        background-color: #e5e5e5;
        color: #333;
    }
    .page-content{
        width: calc(100vw - 220px);
        padding:20px 30px 50px;
    }
}

</style>
