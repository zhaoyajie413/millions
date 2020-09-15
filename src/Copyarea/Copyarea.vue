<template>
    <div style="position: relative">
        <slot></slot>
        <a @click="handleCopy" style="position: absolute;top: 0px;right: -40px;line-height: 20px">
            copy
        </a>
    </div>
</template>

<script>
  export default {
    name: 'Copyarea',
    methods:{
      handleCopy(){
        this.$emit('afterClick',this.copyText);
      },
      copyText(text){
        var range = document.createRange();
        var copyDOM = document.createElement('a');
        copyDOM.innerHTML = text;
        window.getSelection().removeAllRanges();
        document.body.appendChild(copyDOM)
        range.selectNode(copyDOM);    
        window.getSelection().addRange(range);  
        var successful = document.execCommand('copy');
        if(successful){
          this.$message.success('copy success!')
        }else{
          this.$message.success('copy fail!')
        }
        document.body.removeChild(copyDOM)
      }
    }
  }
</script>

<style scoped>

</style>