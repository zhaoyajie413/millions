<template>
  <section class="table-dynamic">
    <div class="table-dynamic-filter-btn" @click="visible = true">
      <a-icon style="transform: rotate(90deg)" type="ellipsis" />
    </div>
<!--    <a-table ref="table"
             v-bind="{...$props}"
             v-on="$listeners"
             :columns="dynamicColumns"
             :components="customHeader"
             size="small">
      <slot></slot>
    </a-table>-->
    <a-table ref="table"
             v-bind="{...$props}"
             v-on="$listeners"
             :components="customHeader"
             size="small">
      <div>

      </div>
    </a-table>

    <a-modal
            title="自定义筛选表头"
            :visible="visible"
            @ok="handleOk"
            :confirmLoading="confirmLoading"
            @cancel="handleCancel"
    >
      <p>筛选要显示的字段</p>
      <div ref="tableDdynamicColumns">
        <a-checkbox
                v-for="item in columns"
                :key="item.dataIndex"
                :value="item.dataIndex"
                :defaultChecked="dynamicColumns.find(it=>it.dataIndex==item.dataIndex)!=null"
        >
          {{item.title}}
        </a-checkbox>
      </div>
    </a-modal>
  </section>
</template>

<script>
  import { Table } from 'ant-design-vue';

  export default {
    name: 'TableDynamic',
    componentName:'TableDynamic',
    props:{
      ...Table.props,
      'name':{
        type:String,
        default(){
          return ''
        }
      },
      /*    pagination: {
            type: Object,
            default() {
              return {}
            }
          }*/
    },
    data() {
      return {
        storageName:this.$route.path + '@dynamicColumns'+(this.name?'_'+this.name:''),
        draggingMap:{},
        draggingState:null,
        customHeader:{
          header: {
            cell: this.ResizeableTitle,
          },
        },
        visible:false,
        confirmLoading:false,
        dynamicColumns:[]
      }
    },
    methods:{
      handleOk(){
        let inputList = Array.prototype.slice
                .call(this.$refs.tableDdynamicColumns.querySelectorAll('input[type="checkbox"]'));
        let checkedList = inputList.filter(it=>it.checked);
        let dataIndexList = checkedList.map(it=>it.value);
        this.dynamicColumns = this.columns.filter(it=>dataIndexList.includes(it.dataIndex));
        localStorage.setItem(this.storageName,JSON.stringify(this.dynamicColumns));
        this.visible=false;
      },
      handleCancel(){
        this.visible = false;
      },
      setDragState(columns){
        let _this = this;
        columns.forEach(col => {
          try{
            _this.draggingMap[col.key] = col.width;
          }catch (e) {
            throw '${col.key} width错误'
          }
        });
        this.draggingState ={... _this.draggingMap} //Vue.observable(this.draggingMap);
      },
      ResizeableTitle (h,props,children) {
        let _this = this;
        let thDom = null;
        const { key, ...restProps } = props;
        const col = this.columns?this.columns.find(col => {
          const k = col.dataIndex || col.key;
          return k === key;
        }):[];
        if (col==null || !col.width) {
          return <th {...restProps}>{children}</th>;
        }

        const onDrag = (x, y) => {
          _this.draggingState[key] = 0;
          col.width = Math.max(x, 1);
        };

        const onDragstop = () => {
          _this.draggingState[key] = thDom.getBoundingClientRect().width;
        };

        return (
                <th {...restProps} v-ant-ref={r => (thDom = r)} width={col.width} class="resize-table-th">
                {children}
                <vue-draggable-resizable
        key={col.key}
      class="table-draggable-handle"
        w={10}
        x={_this.draggingState[key] || col.width}
        z={1}
        axis="x"
        draggable={true}
        resizable={false}
        onDragging={onDrag}
        onDragstop={onDragstop} ></vue-draggable-resizable>
                </th>
      );
      },
    },
    /*updated() {
      var storageList =  localStorage.getItem(this.storageName);
      if(storageList){
        this.dynamicColumns = JSON.parse(storageList)
      }else{
        this.dynamicColumns = this.columns.filter(it=>it.visible);
      }
      this.setDragState(this.dynamicColumns);
    },*/
    created() {
      console.log("miosdasd")
  /*    var storageList =  localStorage.getItem(this.storageName);
      if(storageList){
        let dataIndexList = JSON.parse(storageList).map(it=>it.dataIndex);
        this.dynamicColumns = this.columns.filter(it=>dataIndexList.includes(it.dataIndex));
      }else{
        this.dynamicColumns = this.columns.filter(it=>it.visible);
      }*/
      this.$off();
      this.$on('table.dynamic.addItem',function (item) {
        console.log("mayuyu");
        console.log(item)
      })
      this.setDragState(this.dynamicColumns);
    }
  };

</script>

<style lang="scss">
  .table-dynamic{
    position: relative;
    .ant-table-content{
      border: none !important;
    }
    .ant-table-body{
      margin: 0 !important;
    }
    table{
      background-color: white;
    }
  }
  .table-dynamic table thead tr th{
    height: 50px;
    /*background-color: lighten($primary,25) !important;*/
    font-weight: bolder;
  }
  .table-dynamic table thead tr th,
  .table-dynamic table thead tr th div{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    position: relative;
  }
  .table-dynamic table thead tr th,
  .table-dynamic table tbody tr td
  {
    padding-left: 16px !important;
  }

  .table-dynamic table thead tr>th:last-child div{
    padding-right: 24px;
  }
  .table-dynamic-filter-btn{
    position: absolute;
    right: 0;
    top: 0;
    width: 24px;
    height: 51px;
    background-color:#e5e5e5;
    z-index: 100;
    text-align: center;
    line-height: 51px;
    cursor: pointer;
  }
  .table-dynamic-filter-btn:hover{
    background-color: darken(#e5e5e5,10);
  }
  .resize-table-th {
    position: relative;
    border-right: 1px solid #e5e5e5 !important;
    .table-draggable-handle {
      height: 100% !important;
      bottom: 0;
      left: auto !important;
      right: -5px;
      cursor: col-resize;
      touch-action: none;
    }
  }
</style>
