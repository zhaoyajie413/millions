<template>
    <div>
        <upload-image  :max-length="1" :fileList="fileList" @upload="upload" >
            <EnlargeImage
                    style="display: inline-block;margin-right: 4px;"
                    v-for="(item,i) in fileList"
                    :key="item+i">
                <preview-image
                        style="margin-right: 8px"
                        @remove="handelRemove"
                        :src="item" :index="i"></preview-image>
            </EnlargeImage>
        </upload-image>
    </div>
</template>

<script>
    import CodeView from "@/components/CodeView/CodeView.vue";
    export default {
        name: "uploadImagePage",
        components:{
            CodeView
        },
        data(){
            return {
                fileList:[]
            }
        },
        methods:{
            handelRemove(imgUrl,index){
                this.fileList.splice(index,1);
            },
            getBase64(img, callback) {
                const reader = new FileReader();
                reader.addEventListener('load', () => callback(reader.result));
                reader.readAsDataURL(img);
            },
            async upload(file){
                var _this = this;
                var form = new FormData();

                form.append('file',file);
                this.getBase64(file,function (res) {
                    _this.fileList.push(res);
                })
            },
        }
    }
</script>

<style scoped>

</style>
