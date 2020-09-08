<template>
  <div class="upload-image-container">
    <slot></slot>
    <div v-if="fileList.length<maxLength" class="uploader-container" @click="pickImage">
      <input @change="handleInput" style="display: none" ref="imageInput" type="file" />
      <div class="upload-button">
          <i :class="loading ? 'icon-minus' : 'icon-plus'"></i>
      </div>
    </div>
  </div>
</template>
<script>
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
          return 6;
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
      handleRemove(){
        this.$refs.imageInput.value = null;
        this.source = null;
        this.$emit('input',{
          file:null,
          iconType:''
        });
      },
      pickImage(){
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
       this.$emit('upload',file);
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
      handleChange(info) {
        if (info.file.status === 'uploading') {
          this.loading = true;
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, imageUrl => {
            this.imageUrl = imageUrl;
            this.loading = false;
          });
        }
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

</style>
