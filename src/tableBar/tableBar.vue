<template>
    <section class="table-bar">
        <div class="table-bar-left" >
          已选  <span class="selectRows">{{Array.isArray(selectedRowKeys)?selectedRowKeys.length:selectedRowKeys}}</span> 条数据
          <slot name="left"></slot>
        </div>
        <div class="table-bar-right">
          <slot name="right"></slot>
        </div>
    </section>
</template>

<script>
  export default {
    name: 'TableBar',
    componentName: 'TableBar',
    props:{
      selectedRowKeys:{
        type:[Array,Number,String],
        required:true
      }
    }
  }
</script>

<style lang="scss">
  .table-bar{
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
    .table-bar-left{
      display: flex;
      line-height: 32px;
      .ant-btn{
        margin-left: 10px;
      }
      .selectRows{
        color: blue;
        margin: 0 4px;
      }
    }
  }

</style>
