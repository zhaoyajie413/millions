<template>
    <div v-show="tabindex == $parent.currentIndex">
      <slot></slot>
    </div>
</template>

<script>
  export default {
    name: 'TabsCardItem',
    props:{
      'tabindex':{
        type:[String, Number],
        required:true
      },
      'label':{
        type:[String, Number],
        default(){
          return ''
        }
      }
    },
      mounted() {
        this.dispatch("TabsCard",'tabs.card.addItem',[this]);
      }
  }
</script>

<style scoped>

</style>
