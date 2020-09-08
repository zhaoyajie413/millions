<template>
   <div>
       <div @click="showEnlarge" ref="enlargeBtn"
            :style="{'width': width+'px','height': height+'px'}"
            :class="{'enlarge-container':true,'border':border}">
           <slot></slot>
       </div>
   </div>
</template>

<script>
  import {imgError} from "./imgError";
  import EnlargeImageModal from './EnlargeImageModal';

  export default {
    name: 'EnlargeImage',
    data(){
        return {
          visible:false,
          source:''
        }
    },
    props:{
      'width':{
        type:[Number,String],
        default(){
          return 128;
        }
      },
      'height':{
        type:[Number,String],
        default(){
          return 128;
        }
      },
      border:{
        type:Boolean,
        default(){
          return true;
        }
      }
    },
    methods:{
      handleLoad(event){
        if(!this.$refs.img)return;
        var rect = this.$refs.img.getBoundingClientRect();
        this.$refs.close.style.right =(( rect.right - rect.width ) - ( this.$refs.close.offsetWidth/2 )) + 'px';
        this.$refs.close.style.top = (rect.top - ( this.$refs.close.offsetHeight/2 )) + 'px';
      },
      handleError(){
        this.loading = false;
        this.$refs.img.src = imgError;
      },
      showEnlarge(){
        this.visible = true;
        let width=540,height=320;
        var img =  this.$refs.enlargeBtn.querySelector('img');
        this.$nextTick(async()=>{
          if(img.src){
            let rect = await this.getImageRect(img.src);
            width = rect.width;
            height = rect.heigth;
          }
          EnlargeImageModal({
            width:width,
            height:height,
            src:img.src
          });
        })

      },
      getImageRect(src){
        return new Promise((rev,rej)=>{
          let img = new Image(),w,h;
          img.src = src;
          img.onload=function (event) {
              if(img.width>img.height){
                w=0.5*window.screen.width;
                h = w/img.width*img.height;
              }
            if(img.height>=img.width){
              h=0.5*window.screen.height;
              w = h/img.height*img.width;
            }
            rev({
              width:w,
              height:h
            })
          }
          img.onerror=function (event) {
              rev({
                width:100,
                height:100
              })
          }
        })
      },
      close(){
        this.visible = false;
      }
    },
    mounted() {
      var _this = this;
      window.onresize=()=>{
        _this.handleLoad()
      }
    }
  }
</script>

<style scoped>
.enlarge-container{
    display: inline-block;
    cursor: pointer;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    object-fit: contain;
    height: 100%;
    width: 100%;
}
.enlarge-container.border{
  border: 1px dashed silver;
}
.enlarge-container img{
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}




</style>
