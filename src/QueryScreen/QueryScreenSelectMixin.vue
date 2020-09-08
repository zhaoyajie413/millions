<template>
  <div style="margin-bottom: 12px" ref="select" v-show="isVisible" class="millions-query-screen-select">
    <label :style="{'width': typeof width == 'string'?width: width+'px'}">{{label}}:</label>
    <a-select
      style="width: 196px"
      v-model="selectValue"
      v-bind="{...$props,...$attrs}"
      v-on="$listeners"
      @change="handleChange">
      <slot></slot>
    </a-select>
    <div style="display: none" class="millions-query-screen-option active current-label">
      <span>{{currentlabel}}</span>
    </div>
  </div>
</template>

<script>
  import { Select } from 'ant-design-vue';
  export default {
    name: 'QueryScreenSelectMixin',
    inheritAttrs: false,
    data(){
      return {
        isVisible:false,
        width:'',
        selectValue:this.value,
        currentlabel:''
      }
    },
    props:{
      ...Select.props,
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
    watch:{
      value(nv){
        if(this.selectValue == nv)return;
        this.selectValue = nv;
        this.reflash();
      }
    },
    methods:{
      reflash(){
       var _this = this;
       this.$nextTick(()=>{
         var dom =  _this.$refs.select.querySelector('.ant-select-selection-selected-value');
         _this.currentlabel = dom?dom.innerText:'';
       })
      },
      unVisible(){
        this.isVisible = false;
      },
      inVisible(){
        this.isVisible = true;
      },
      handleChange(){
        this.reflash();
        this.$emit('input',this.selectValue);
      }
    },
    created() {
      this.isVisible = this.visible;
    },
    mounted() {
      this.reflash();
      this.dispatch('QueryScreen', 'query.screen.addItem', [this]);
    }

  }
</script>

<style scoped>
  .millions-query-screen-select label{
    display: inline-block;
  }
</style>
