<template>
    <section :class="{
    'millions-query-screen':true,
    'close':isClose
    }">
      <slot></slot>
      <a-icon @click="filtersVisible = !filtersVisible" class="millions-query-screen-setting" theme="filled" type="setting" />
      <div @click="isClose = !isClose" class="millions-query-screen-drawer">
        <a-icon v-if="isClose" style="vertical-align: top" type="caret-down" />
        <a-icon v-else style="vertical-align: top"  type="caret-up" />
      </div>
      <a-modal
        title="自定义筛选字段"
        :visible="filtersVisible"
        @cancel="()=>{filtersVisible = !filtersVisible}"
      >
        <p>最多支持7个筛选字段</p>
        <div>
          <a-checkbox-group @change="showSearch" :options="childOptions" v-model="showList"  />
        </div>
        <template slot="footer">
          <a-button key="back" @click="filtersVisible = !filtersVisible">关闭</a-button>
        </template>
      </a-modal>
    </section>
</template>

<script>
  export default {
    name: 'QueryScreen',
    componentName:"QueryScreen",
    data(){
      return{
        isClose: false,
        filtersVisible: false,
        childOptions:[],
        lastShowList:[],
        showList:[],
        storageName:this.$route.path+'@showList'+(this.name?'_'+this.name:'')
      }
    },
    props:{
      'width':{
        type:[String,Number],
        default(){
          return '60px'
        }
      },
      'name':{
        type:String,
        default(){
          return ''
        }
      }
    },
    created() {
      var _this = this;
      let storageList = localStorage.getItem(this.storageName);
      if(storageList){
        this.showList = JSON.parse(localStorage.getItem(this.storageName));
        this.lastShowList = [...this.showList]
      }
      this.$on('query.screen.addItem',function (item) {
        if(item.label &&  _this.childOptions.indexOf(item.label)===-1){
          _this.childOptions.push(item.label);
          item.width = _this.width;
        }
        if(storageList){
          if(_this.showList.includes(item.label)){
            item.inVisible();
          }else{
            item.unVisible();
          }
        }else{
          if(_this.showList.length>7)item.unVisible();
          if(item.label && item.isVisible)_this.showList.push(item.label);
        }
      })
    },
    methods:{
      showSearch(nv){
          var _this = this;
          if(nv.length>7){
            this.showList = [..._this.lastShowList];
            this.$message.error('最多选择7个选项');
            return;
          }else{
            this.lastShowList = [...this.showList];
          }
          localStorage.setItem(this.storageName,JSON.stringify(nv));
          this.$children.forEach(item=>{
            if(!item.label)return;
            let ele = _this.showList.find(member=>member == item.label);
            if(ele){
              item.inVisible();
            }else{
              item.unVisible();
            }
          })
      }
    }
  }
</script>

<style lang="scss">
  $page: millions-query-screen;
  $primary: blue;
.#{$page}{
  padding: 24px;
  position: relative;
  z-index: 1;
  font-size: 13px;
  box-shadow: 1px 1px 2px rgba(0,0,0,0.1);
  background-color: white;
  margin-bottom: 24px;
  .#{$page}-drawer{
    position: absolute;
    left: 50%;
    bottom: -16px;
    width: 60px;
    height: 16px;
    cursor: pointer;
    transform: translateX(-50%);
    background-color: white;
    text-align: center;
    z-index: 1;
  }
  .#{$page}-setting{
    position: absolute;
    right: 30px;
    top: 10px;
    cursor: pointer;
    background-color: white;
    text-align: center;
    z-index: 1;
  }
}
  .#{$page}.close {
    .#{$page}-select{
      display: inline-block;
      background-color: lighten($primary, 40);
      margin-right: 12px;
      margin-bottom: 0px !important;
      padding:8px 12px;
      label{
        padding-left: 12px;
        width: auto !important;
        color: lighten($primary, 10);;
      }
      .#{$page}-option{
        margin: 0;
        padding: 0;
      }
      .#{$page}-option.active{
        display: inline-block;
        background-color: transparent;
        color: $primary;
        margin-left: 2px;
      }
      .#{$page}-option{
        display: none;
      }

    }
    .#{$page}-select  .ant-select{
      display: none !important;
    }
    .#{$page}-select .current-label{
      display: inline-block !important;
    }
  }
</style>
