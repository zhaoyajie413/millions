<template>
    <div>
        <h3>图片预览</h3>
        <p>默认为宽高128px的盒子包裹</p>
        <enlarge-image>
            <img
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599217703399&di=86ed1a3560bd635bea93a97cd74df812&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201505%2F26%2F20150526041206_QXzRs.jpeg">
        </enlarge-image>
        <code-view v-model="code_01"></code-view>
        <h4>自定义宽高</h4>
        <p>属性：width/height</p>
        <enlarge-image width="300" height="240">
            <img
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599217703399&di=86ed1a3560bd635bea93a97cd74df812&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201505%2F26%2F20150526041206_QXzRs.jpeg">
        </enlarge-image>
        <code-view v-model="code_01"></code-view>
    </div>
</template>

<script>
    import CodeView from "@/components/CodeView/CodeView.vue";
    export default {
        name: "EnlargeImagePage",
        components:{
            CodeView
        },
        data(){
            return {
                code_01:`<enlarge-image>
                    <img
                            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599217703399&di=86ed1a3560bd635bea93a97cd74df812&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201505%2F26%2F20150526041206_QXzRs.jpeg">
                </enlarge-image>`,
                code_02:`<enlarge-image width="300" height="240">
                    <img
                            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599217703399&di=86ed1a3560bd635bea93a97cd74df812&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201505%2F26%2F20150526041206_QXzRs.jpeg">
                </enlarge-image>`
            }
        }
    }
</script>

<style scoped>

</style>
