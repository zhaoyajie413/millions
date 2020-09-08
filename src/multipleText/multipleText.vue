<template>
   <div ref="multipleText" class="multiple-text" >
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: 'MultipleText',
    componentName:'MultipleText',
      props:{
        line:{
            type:[Number,String],
            default:1
        }
      },
      mounted() {
        this.$refs.multipleText.style.cssText = `-webkit-line-clamp:${this.line};line-clamp:${this.line}`
      }
  }
</script>

<style>
.multiple-text{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-break: break-all;
  overflow: hidden;
  margin-bottom: 4px;
  padding: 4px;
  border-radius: 2px;
  border:1px solid darken(#f5f5f5,5);
}
</style>
