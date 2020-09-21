<template>
  <div class="upload-image-container">
    <EnlargeImage
            style="display: inline-block;margin-right: 4px;"
            v-for="(item,i) in fileList"
            :key="item+i">
      <preview-image
              style="margin-right: 8px"
              @remove="handleRemove"
              :src="item" :index="i">
        <a-progress class="upload-image-process" v-if="i==fileList.length-1 && loading"
                    :status="status"
                    type="circle" :width="60" :percent="percent" />
      </preview-image>
    </EnlargeImage>
    <div v-if="fileList.length<maxLength" class="uploader-container" @click="pickImage">
      <input @change="handleInput" style="display: none" ref="imageInput" type="file" />
      <div class="upload-button">
          <i :class="loading ? 'icon-minus' : 'icon-plus'"></i>
      </div>
    </div>
  </div>
</template>
<script>
  import upload from "../Utils/upload";

  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  export default {
    name:"UploadImage",
    componentName:"UploadImage",
    data() {
      return {
        loading: false,
        imageUrl: '',
        source:'',
        iconType:'',
        percent:0,
        status:'active'
      };
    },
    props:{
      'iconBox':{
        type:Object,
        default(){
          return {
            iconType:'',
            file:null
          }
        }
      },
      'fileList':{
        type:Array,
        default() {
          return [];
        }
      },
      'maxLength':{
        type:[Number,String],
        default(){
          return 999;
        }
      },
      'url':{
        type:String,
        required:true
      },
      'data':{
        type:Object,
        default(){
          return {};
        },
      },
      'filename':{
        type:String,
        default(){
          return "file"
        }
      }
    },
    watch:{
      'iconBox.file'(){
        if(this.iconBox.file == null){
          this.source = null;
          return;
        };
        let data = new Blob([this.iconBox.file], {
          type: "text/plain;charset=UTF-8"
        });
        var downloadUrl = window.URL.createObjectURL(data);
        this.source = downloadUrl;
      }
    },
    methods: {
      handleRemove(imgUrl,index){
        if(index==this.fileList.length-1)this.loading = false;
        this.fileList.splice(index,1);
        this.$emit('remove',index)
      },
      pickImage(){
        if(this.loading)return;
        this.$refs.imageInput.value = null;
        this.$refs.imageInput.click();
      },
      handleInput(event){
       var file = event.target.files[0];
        if(!file)return;
        if(this.beforeUpload(file)){
            this.localData(file);
        }
      },
      /*上传文件及回调*/
      localData(file){
        var _this =this;
       this.$emit('begin',file);
        this.status = 'active'
       this.percent = 0;
       this.loading = true;
            upload({
                    onProgress: (event)=>{
                      this.percent = Math.round(event.percent)
                    },
                    onError: (event, body)=>{
                      this.$emit('error',event,body);
                      this.status = 'exception'
                    },
                    onSuccess: (body)=>{
                      this.$emit('success',file);
                      this.loading = false;
                    },
                    data: this.data,
                     filename:this.filename,
                    file: file,
                    action: this.url,
                   })
      },
    dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  },
      beforeUpload(file) {
        const isJPG = (file.type == 'image/jpeg' || file.type == 'image/png')
        if (!isJPG) {
          this.$message.error('You can only upload JPG or PNG file!');
          return isJPG;
        }
        if(file.type == 'image/jpeg')this.iconType=0;
        if(file.type == 'image/png')this.iconType=1;
        const isLt2M = file.size < 1024*1024*2;
        if (!isLt2M) {
          this.$message.error('The size of icon file must be less than 2M!');
        }
        return isJPG && isLt2M;
      },
    },
  };
</script>
<style>
 .uploader-container{
   width: 128px;
   height: 128px;
   position: relative;
   overflow: hidden;
   border-radius: 4px;
   border: 1px dashed silver;
   cursor: pointer;
   display: inline-block;
 }
 .uploader-container .upload-button>i {
        font-size: 32px;
        color: silver;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 100;
        color: silver;
    }
.upload-image-process{
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);

}
 .upload-image-process.ant-progress-circle .ant-progress-text{
  color: dodgerblue;
}
</style>
