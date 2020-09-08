<template>
    <section>
        <div class="tabs-card">
          <div class="tabs-card-header">
            <div class="tabs-card-list">
              <div class="tabs-card-title">
                {{title}}
              </div>
              <div
                :class="{'tabs-card-tab':true, 'active':item.tabindex == currentIndex}"
                @click="handleClick(item)"
                v-for="item in options">{{item.label}}</div>
            </div>
            <div class="tabs-card-operations">
                  <slot name="operations"></slot>
              </div>
          </div>
          <div class="tabs-card-content" ref="content">
            <slot></slot>
          </div>
        </div>
        <section>
          <slot name="content"></slot>
        </section>
    </section>
</template>

<script>
  export default {
    name: 'TabsCard',
      componentName:'TabsCard',
      data(){
      return {
        currentIndex:'',
          options:[]
      }
    },
    props:{
      'title':{
        type:[String, Number],
        default(){
          return '';
        }
      },
      'current':{
        type:[String, Number],
        default(){
          return '0';
        }
      },
    },
    created() {
      this.currentIndex = this.current;
      this.$off();
      this.$on("tabs.card.addItem",function(item){
          this.options.push({
              label:item.label,
              tabindex:item.tabindex
          })
      })
    },
    methods:{
      handleClick(item){
        if(item.tabindex == undefined) throw 'tabindex 不能为 undefined';
        this.currentIndex = item.tabindex;
        this.$emit('after',this.currentIndex);
      },

    },
    mounted(){

    }
  }
</script>

<style lang="scss">
$tabsCard: tabs-card;

  .#{$tabsCard}{
    margin-top: 20px;
  .#{$tabsCard}-header{
    overflow: hidden;
    display: flex;
    justify-content:space-between;
    .#{$tabsCard}-list{
      .#{$tabsCard}-title{
        width: 100px;
        font-size: 18px;
        line-height: 40px;
        font-weight: bolder;
        float: left;
      }
      .#{$tabsCard}-tab{
        padding: 10px 15px;
        box-sizing: border-box;
        height: 40px;
        font-size: 16px;
        line-height: 20px;
        background-color: #E3E3E3;
        border-right:1px solid rgba(255,255,255,0.6);
        float: left;
        cursor: pointer;
        position: relative;
        z-index: 100;
      }
    }
    .#{$tabsCard}-tab.active{
      background-color: white;
    }
    .#{$tabsCard}-content{

    }
  }
}
</style>
