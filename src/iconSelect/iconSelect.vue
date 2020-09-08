<template>
    <div >
        <a-modal
                style="top: 10px;"
                title="小图标"
                :visible="visible"
                :destroyOnClose="true"
                :confirmLoading="confirmLoading"
                @ok="handleSelected"
                @cancel="visible = false"
        >
           <div class="icon-select-wrapper" style="height: 300px;overflow-y: scroll">
               <i @click="selected(item.properties.name)"
                  :class="`icon-${item.properties.name} ${item.properties.name == activeName?'active':''}`"
                  :key="$index"
                  v-for="(item, $index) in iconList"></i>
           </div>
        </a-modal>

    </div>
</template>

<script>
    import '../assets/icomoon/style.css'
    import iconData from '../assets/icomoon/selection.json'
    export default {
        name: "iconSelect",
        data(){
            return {
                iconList: iconData.icons,
              visible: false,
              confirmLoading:false,
              activeName:''
            }
        },
      methods:{
        selected(name){
          this.activeName = name;
        },
        handleSelected(){
          this.visible = false;
            this.$emit('afterSelected', this.activeName)
        }
      }
    }
</script>

<style lang="scss">
    .icon-select-wrapper [class*="icon-"]{
        margin: 6px;
        display: inline-block;
        color: darken(#e5e5e5,30);
        font-size: 28px;
        padding: 6px;
        border-radius: 3px;
    }
   .icon-select-wrapper i.active{
       background-color:#1890ff ;
       color: white;
   }
</style>
