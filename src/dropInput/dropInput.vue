<template>
  <section class="drop-input-container">
    <a-select v-model="active"  style="width: 150px;margin-right: 4px" >
      <a-select-option v-for="(item,index) in labels" :key="index" :value="index">{{item.label}}</a-select-option>
    </a-select>
    <slot></slot>
    <a-button type="primary" @click="handelClick" style="margin-left: 4px">查询</a-button>
  </section>
</template>

<script>
  export default {
    name:'DropInput',
    componentName:'DropInput',
    data(){
      return {
        labels:[],
        active:0
      }
    },
    provide(){
      return {
        dropInput:this
      }
    },
    created() {
      this.$off();
      this.$on('drop.input.addItem',function (item) {
        this.labels.push({
          label:item.label,
          prop:item.prop
        })
      })
    },
    methods:{
      handelClick(){
        this.$emit('click')
      }
    }
  }
</script>

<style>
  .drop-input-container{
    display: flex;
    width: 414px;
  }
</style>
