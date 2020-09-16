<template>
   <!-- <a-table-column v-bind="{...$props,...attrs}" v-on="$listeners"></a-table-column>-->
    <div>
        mayuyu
    </div>
</template>

<script>
    import { Table } from 'ant-design-vue';

    export default {
        name: "TableDynamicItem",
        props:{
            ...Table.Column.props
        },
        components:{

        },
        created() {
            console.log("可爱")
        },
        mounted() {
            console.log("mio");
            this.dispatch('TableDynamic', 'table.dynamic.addItem', [this]);
        }
    }
</script>

<style scoped>

</style>
