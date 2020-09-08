<template>
    <div   v-show="isVisible" class="millions-query-screen-select">
      <label :style="{'width': typeof width == 'string'?width: width+'px'}">{{label}}: </label>
      <slot></slot>
    </div>
</template>

<script>
  export default {
    name: 'QueryScreenSelect',
    data(){
      return {
        isVisible:false,
        width:'',
      }
    },
    props:{
      'label':{
        type:String,
        default:''
      },
      'visible':{
        type:Boolean,
        default:false
      },
      'prop':{
        type:String,
        default:''
      },
    },
    computed:{

    },
    methods:{
      unVisible(){
        this.isVisible = false;
      },
      inVisible(){
        this.isVisible = true;
      },
      handleClick(value){
        this.$emit('input',value);
        this.$emit('change',value);
      }
    },
    mounted() {
      this.isVisible = this.visible;
        this.dispatch('QueryScreen', 'query.screen.addItem', [this]);
    }

  }
</script>

<style scoped>
  .millions-query-screen-select label{
    display: inline-block;
  }
</style>
