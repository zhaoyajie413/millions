<template>
    <div>
        <h4>单张图片:max-length="1"</h4>
        <upload-image :url="url"
                      :max-length="1"
                      :fileList="fileList"
                      :data="data"
                      @begin="upload"
                      @error="error"
                      @remove="remove"
                      @success="success" ></upload-image>
        <h4>有限张图片:max-length="6"</h4>
        <upload-image  :max-length="6"
                       :url="url"
                       :fileList="fileList_2"
                       :data="data"
                       @begin="upload_02"
                       @error="error"
                       @remove="remove"
                       @success="success" ></upload-image>
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
                url:'https://t-operation.enjoymov.com/rp/main/fileLoad/uploadFile',
                fileList:[],
                fileList_2:[],
                data:{
                    type:1
                }
            }
        },
        methods:{
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
            async upload_02(file){
                var _this = this;
                var form = new FormData();

                form.append('file',file);
                this.getBase64(file,function (res) {
                    _this.fileList_2.push(res);
                })
            },
            error(){
                this.$message.error("上传失败")
            },
            success(){
                this.$message.error("上传成功")
            },
            remove(index){
                this.$message.error(`删除了第${index}张图片`);
            }
        }
    }
</script>

<style scoped>

</style>
