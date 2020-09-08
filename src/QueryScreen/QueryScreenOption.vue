<template>
    <div data-value="value"
         @click="handleClick"
         :class="{
    'millions-query-screen-option':true,
    'active':value === $parent.$attrs.value
    }">
      <slot></slot>
    </div>
</template>

<script>
  export default {
    name: 'QueryScreenOption',
    props:{
      'value':{
        type:[String, Number],
        default:''
      }
    },
    methods:{
      handleClick(){
        this.$parent.handleClick(this.value);
      }
    }
  }
</script>

<style lang="scss">
  $page: millions-query-screen;
  $primary: blue;
.#{$page}-option{
  display: inline-block;
  margin: 4px;
  padding: 4px 12px;
  cursor: pointer;
}
  .#{$page}-option.active{
    background-color: $primary;
    color: white;
  }
</style>
