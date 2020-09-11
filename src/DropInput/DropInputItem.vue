<template>
	<section style="width: 195px"
           v-show="dropInput.labels.length>0 && dropInput.labels[dropInput.active].prop == prop && prop">
    <slot></slot>
	</section>
</template>

<script>
  export default {
    name:'dropInputItem',
    data(){
      return {

      }
    },
	inject: ['dropInput'],
    props:{
      label:{
        type:String,
        default(){
          return ''
        }
      },
      prop:{
        type:String,
        default(){
          return ''
        }
      },
    },
    mounted() {
		this.dispatch('DropInput', 'drop.input.addItem', [this]);
    }
  }
</script>

<style>
</style>
