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
        <table-dynamic  :dataSource="dataSource"   :rowKey="(record,index)=>index">
            <table-dynamic-item></table-dynamic-item>
           <!-- <table-dynamic-item title="UID" data-index="uid" width="60"></table-dynamic-item>-->
        </table-dynamic>
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
                dataSource:[],
                columns:generateColumns(this.$createElement),
                selectedRowKeys: [],
                pagination: {
                    current:1
                },
                responseData:responseData,
            }
        },
        created() {
            this.getData();
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
