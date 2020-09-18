<template>
    <div>
        <!--表格区域开始-->
        <table-dynamic
                :dataSource="dataSource"
                :columns="columns"
                :rowSelection="{selectedRowKeys: selectedRowKeys,type:'radio',columnWidth:30, onChange: onSelectChange}"
                :rowKey="(record,index)=>index"
                :pagination="pagination"
                @change="getData"
        >
        </table-dynamic>
        <h4>参考代码</h4>
        <code-view v-model="code"></code-view>
        <h4>generateColumns:返回一个jsx书写的完整的columns。visible属性表述初始化时展示在列表中</h4>
        <code-view v-model="generateColumns"></code-view>
        <h4>dataSource:数据列表。</h4>
        <code-view v-model="JSON.stringify(dataSource)"></code-view>
    </div>
</template>

<script>
    import CodeView from "@/components/CodeView/CodeView.vue";
    import {generateColumns} from "../model/dataSource";
    const responseData= {"data":{"oldUid":"16820001485","totalFlow":102400,"planType":"1","orderId":"17100171942417","outEsimApplyId":"1597195974963624","profileStatus":1,"remainingSeconds":8.64E7,"memo":"资源不好用","updateTime":1599010270000,"type":"2","duration":1,"uid":"16820002459","oldOrderId":"17098362961493","createTime":1599010270000,"countryCode":"CN","planId":37098362638797,"id":2,"oldSkuId":5588,"status":"0"},"key":"0000","msg":"成功"}
    export default {
        name: "tableDynamicPage",
        components:{
            CodeView
        },
        data(){
            return {
                generateColumns:`generateColumns =(h)=>{
              return [{
                title: 'UID',
                dataIndex: 'uid',
                key: 'uid',
                visible:true,
                width:60,
              },{
                title: '下发状态',
                dataIndex: 'status',
                key: 'status',
                visible:true,
                width:60,
                customRender: (text, row, index,) => {
                  return  <div >关闭</div>;
                }
              },
                {
                  title: 'PUSHID',
                  dataIndex: 'pushId',
                  key: 'pushId',
                  visible:true,
                  width:60,
                  customRender: (text, row, index,) => {
                    return (<multiple-text line="3">
                        Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.
                        </multiple-text>);
                  }
                },
                {
                  title: '执行反馈',
                  dataIndex: 'msgStatus',
                  key: 'msgStatus',
                  visible:true,
                  width:200,
                  customRender: (text, row, index,) => {
                    return "执行成功"
                  }
                },
                {
                  title: '下发时间',
                  dataIndex: 'upTime',
                  key: 'upTime',
                  visible:true,
                  width:100
                },
                {
                  title: '推送时间',
                  dataIndex: 'createTime',
                  key: 'createTime',
                  visible:true,
                  width:100
                }
              ]
            }
            `,
                dataSource:[],
                columns:generateColumns(this.$createElement),
                selectedRowKeys: [],
                pagination: {
                    current:1
                },
                responseData:responseData,
                code:`     <table-dynamic
                :dataSource="dataSource"
                :columns="columns"
                :rowSelection="{selectedRowKeys: selectedRowKeys,type:'radio',columnWidth:30, onChange: onSelectChange}"
                :rowKey="(record,index)=>index"
                :pagination="pagination"
                @change="getData"
        >
        </table-dynamic>
        data(){
            return {
                isActive:false,
                dataSource:[],
                columns:generateColumns(this.$createElement),
                selectedRowKeys: [],
                pagination: {
                    current:1
                },
            }
`
            }
        },
        created() {
            this.getData();
        },
        updated() {
            console.log("mio")
        },
        methods:{
            getData(){
                this.dataSource = this.dataSource.concat(this.responseData.data);
              this.$message.success("ok");
            },

            onSelectChange(selectedRowKeys) {
                console.log('selectedRowKeys changed: ', selectedRowKeys);
                this.selectedRowKeys = selectedRowKeys;
            },
        }
    }
</script>

<style scoped>

</style>
