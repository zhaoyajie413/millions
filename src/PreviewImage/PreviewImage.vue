<template>
  <div  class="uploaded-images" :style="{width:width+'px',height:height+'px'}">
    <img
      ref="img"
      @loadstart="handleLoadStart"
      @load="handleLoad"
      @error="handleError"
      class="upload-preview"
      :src="src"/>
    <slot></slot>
    <div v-if="close" class="upload-close">
      <i style="color: dodgerblue" @click.stop="handleRemove" class="icon-close" ></i>
    </div>
  </div>
</template>

<script>
    import { imgError } from './imgError';
    export default {
      name: "PreviewImage",
      data(){
        return {
          loading:true
        }
      },
      props:{
        src:{
          type:String,
          default(){
            return ''
          }
        },
        index:{
          type:[String,Number],
          default(){
            return ''
          }
        },
        close:{
          type:Boolean,
          default(){
            return true
          }
        },
        width:{
          type:Number,
          default(){
            return 128;
          }
        },
        height:{
          type:Number,
          default(){
            return 128;
          }
        }

      },
      methods:{
        handleLoadStart(){
           this.loading = false;
        },
        handleLoad(){
          this.loading = false;
        },
        handleRemove(){
            this.$emit('remove',this.src,this.index);
        },
        handleError(){
          this.loading = false;
          this.$refs.img.src = imgError;
        }
      }
    }
</script>

<style>
  .uploaded-images{
    position: relative;
    overflow: hidden;
    cursor: pointer;
    display: inline-block;
  }
  .uploaded-images img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background: #f5f5f5;
    object-fit: contain;
  }
  .uploaded-images .upload-close{
    position: absolute;
    right: 4px;
    top: 4px;
    width: 18px;
    height: 18px;
    text-align: center;
    line-height: 18px;
    z-index: 1000;
  }
  .upload-close:hover i{
    color:dodgerblue;
  }
</style>
