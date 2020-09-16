<template>
    <div>
        <h3>过滤查询条件</h3>
        <p>支持下拉框和选择标签两种方式</p>
        <query-screen>
            <query-screen-select-mixin
                    @change="getData"
                    v-model="search.company"
                    prop="msgType"
                    :visible="true"
                    label="公司牛批"
            >
                <a-select-option :value="1" >微信</a-select-option>
                <a-select-option :value="2" >百度</a-select-option>
                <a-select-option :value="3" >阿里</a-select-option>
                <a-select-option :value="4" >京东</a-select-option>
            </query-screen-select-mixin>
            <query-screen-select
                    v-model="search.msgType"
                    prop="msgType"
                    :visible="true"
                    label="消息类型"
                    @change="getData"
            >
                <query-screen-option value="">全部</query-screen-option>
                <query-screen-option value="alert">ALERT</query-screen-option>
                <query-screen-option value="sms">SMS</query-screen-option>
                <query-screen-option value="url">URL</query-screen-option>
                <query-screen-option value="voice">VOICE</query-screen-option>
                <query-screen-option value="float">FLOAT</query-screen-option>
            </query-screen-select>
            <query-screen-select
                    v-model="search.executeResult"
                    prop="executeResult"
                    :visible="true"
                    label="执行反馈"
                    @change="getData"
            >
                <query-screen-option value="">全部</query-screen-option>
                <query-screen-option value="0">等待</query-screen-option>
                <query-screen-option value="1">发送</query-screen-option>
                <query-screen-option value="2">过期</query-screen-option>
                <query-screen-option value="3">设备过期</query-screen-option>
                <query-screen-option value="4">完成</query-screen-option>
            </query-screen-select>
            <query-screen-select
                    v-model="search.country"
                    prop="country"
                    :visible="true"
                    @change="getData"
                    label="国家">
                <QueryScreenOption :value="1">美利坚合众国</QueryScreenOption>
                <QueryScreenOption :value="2">大不列颠</QueryScreenOption>
                <QueryScreenOption :value="3">法兰西</QueryScreenOption>
                <QueryScreenOption :value="4">中华民国</QueryScreenOption>
            </query-screen-select>
            <query-screen-select
                    v-model="search.date"
                    :visible="true"
                    prop="date"
                    @change="getData"
                    label="创建时间">
                <query-screen-option :value="1">今天</query-screen-option>
                <query-screen-option :value="2">昨天</query-screen-option>
                <query-screen-option :value="3">本周</query-screen-option>
                <query-screen-option :value="4">上周</query-screen-option>
                <query-screen-option :value="5">本月</query-screen-option>
                <query-screen-option :value="6">上月</query-screen-option>
                <query-screen-option :value="7">自定义时间段</query-screen-option>
            </query-screen-select>
            <query-screen-select
                    v-model="search.beauty"
                    :visible="true"
                    prop="beauty"
                    @change="getData"
                    label="美女">
                <query-screen-option value="">全部</query-screen-option>
                <query-screen-option :value="1">掘未央奈</query-screen-option>
                <query-screen-option :value="2">宋茜</query-screen-option>
            </query-screen-select>
            <query-screen-select
                    v-model="search.weapon"
                    @change="getData"
                    label="武器">
                <query-screen-option value="">全部</query-screen-option>
                <query-screen-option :value="1">飞机</query-screen-option>
                <query-screen-option :value="2">大炮</query-screen-option>
                <query-screen-option :value="3">导弹</query-screen-option>
            </query-screen-select>
            <query-screen-select
                    v-model="search.goods"
                    @change="getData"
                    label="商品">
                <query-screen-option value="">全部</query-screen-option>
                <query-screen-option :value="1">洗衣机</query-screen-option>
                <query-screen-option :value="2">鞋子</query-screen-option>
                <query-screen-option :value="3">上衣</query-screen-option>
                <query-screen-option :value="4">军大衣</query-screen-option>
            </query-screen-select>
            <query-screen-select
                    v-model="search.electric"
                    @change="getData"
                    label="电器">
                <query-screen-option value="">全部</query-screen-option>
                <query-screen-option :value="1">洗衣机</query-screen-option>
                <query-screen-option :value="2">冰箱</query-screen-option>
                <query-screen-option :value="3">热水器</query-screen-option>
                <query-screen-option :value="4">电视机</query-screen-option>
            </query-screen-select>
            <query-screen-select
                    v-model="search.book"
                    @change="getData"
                    label="古代经典">
                <query-screen-option value="">全部</query-screen-option>
                <query-screen-option :value="1">三国演义</query-screen-option>
                <query-screen-option :value="2">水浒传</query-screen-option>
                <query-screen-option :value="3">金瓶梅</query-screen-option>
                <query-screen-option :value="4">西游记</query-screen-option>
            </query-screen-select>
            <query-screen-select
                    v-model="search.car"
                    @change="getData"
                    label="汽车">
                <query-screen-option value="">全部</query-screen-option>
                <query-screen-option :value="1">大众</query-screen-option>
                <query-screen-option :value="2">比亚迪</query-screen-option>
                <query-screen-option :value="3">保时捷</query-screen-option>
                <query-screen-option :value="4">奥迪</query-screen-option>
            </query-screen-select>
        </query-screen>
        <code-view v-model="code_01"></code-view>
    </div>
</template>

<script>
    import CodeView from "@/components/CodeView/CodeView.vue";
    const code_01 = `<query-screen>
            <query-screen-select-mixin
                    @change="getData"
                    v-model="search.company"
                    prop="msgType"
                    :visible="true"
                    label="公司牛批"
            >
                <a-select-option :value="1" >微信</a-select-option>
                <a-select-option :value="2" >百度</a-select-option>
                <a-select-option :value="3" >阿里</a-select-option>
                <a-select-option :value="4" >京东</a-select-option>
            </query-screen-select-mixin>
            <query-screen-select
                    v-model="search.msgType"
                    prop="msgType"
                    :visible="true"
                    label="消息类型"
                    @change="getData"
            >
                <query-screen-option value="">全部</query-screen-option>
                <query-screen-option value="alert">ALERT</query-screen-option>
                <query-screen-option value="sms">SMS</query-screen-option>
                <query-screen-option value="url">URL</query-screen-option>
                <query-screen-option value="voice">VOICE</query-screen-option>
                <query-screen-option value="float">FLOAT</query-screen-option>
            </query-screen-select>
            <query-screen-select
                    v-model="search.executeResult"
                    prop="executeResult"
                    :visible="true"
                    label="执行反馈"
                    @change="getData"
            >
                <query-screen-option value="">全部</query-screen-option>
                <query-screen-option value="0">等待</query-screen-option>
                <query-screen-option value="1">发送</query-screen-option>
                <query-screen-option value="2">过期</query-screen-option>
                <query-screen-option value="3">设备过期</query-screen-option>
                <query-screen-option value="4">完成</query-screen-option>
            </query-screen-select>
            <query-screen-select
                    v-model="search.country"
                    prop="country"
                    :visible="true"
                    @change="getData"
                    label="国家">
                <QueryScreenOption :value="1">美利坚合众国</QueryScreenOption>
                <QueryScreenOption :value="2">大不列颠</QueryScreenOption>
                <QueryScreenOption :value="3">法兰西</QueryScreenOption>
                <QueryScreenOption :value="4">中华民国</QueryScreenOption>
            </query-screen-select>
            <query-screen-select
                    v-model="search.date"
                    :visible="true"
                    prop="date"
                    @change="getData"
                    label="创建时间">
                <query-screen-option :value="1">今天</query-screen-option>
                <query-screen-option :value="2">昨天</query-screen-option>
                <query-screen-option :value="3">本周</query-screen-option>
                <query-screen-option :value="4">上周</query-screen-option>
                <query-screen-option :value="5">本月</query-screen-option>
                <query-screen-option :value="6">上月</query-screen-option>
                <query-screen-option :value="7">自定义时间段</query-screen-option>
            </query-screen-select>
            <query-screen-select
                    v-model="search.beauty"
                    :visible="true"
                    prop="beauty"
                    @change="getData"
                    label="美女">
                <query-screen-option value="">全部</query-screen-option>
                <query-screen-option :value="1">掘未央奈</query-screen-option>
                <query-screen-option :value="2">宋茜</query-screen-option>
            </query-screen-select>
            <query-screen-select
                    v-model="search.weapon"
                    @change="getData"
                    label="武器">
                <query-screen-option value="">全部</query-screen-option>
                <query-screen-option :value="1">飞机</query-screen-option>
                <query-screen-option :value="2">大炮</query-screen-option>
                <query-screen-option :value="3">导弹</query-screen-option>
            </query-screen-select>
            <query-screen-select
                    v-model="search.goods"
                    @change="getData"
                    label="商品">
                <query-screen-option value="">全部</query-screen-option>
                <query-screen-option :value="1">洗衣机</query-screen-option>
                <query-screen-option :value="2">鞋子</query-screen-option>
                <query-screen-option :value="3">上衣</query-screen-option>
                <query-screen-option :value="4">军大衣</query-screen-option>
            </query-screen-select>
            <query-screen-select
                    v-model="search.electric"
                    @change="getData"
                    label="电器">
                <query-screen-option value="">全部</query-screen-option>
                <query-screen-option :value="1">洗衣机</query-screen-option>
                <query-screen-option :value="2">冰箱</query-screen-option>
                <query-screen-option :value="3">热水器</query-screen-option>
                <query-screen-option :value="4">电视机</query-screen-option>
            </query-screen-select>
            <query-screen-select
                    v-model="search.book"
                    @change="getData"
                    label="古代经典">
                <query-screen-option value="">全部</query-screen-option>
                <query-screen-option :value="1">三国演义</query-screen-option>
                <query-screen-option :value="2">水浒传</query-screen-option>
                <query-screen-option :value="3">金瓶梅</query-screen-option>
                <query-screen-option :value="4">西游记</query-screen-option>
            </query-screen-select>
            <query-screen-select
                    v-model="search.car"
                    @change="getData"
                    label="汽车">
                <query-screen-option value="">全部</query-screen-option>
                <query-screen-option :value="1">大众</query-screen-option>
                <query-screen-option :value="2">比亚迪</query-screen-option>
                <query-screen-option :value="3">保时捷</query-screen-option>
                <query-screen-option :value="4">奥迪</query-screen-option>
            </query-screen-select>
        </query-screen>`

    export default {
        name: "QueryScreenPage",
        components:{
            CodeView
        },
        data(){
          return {
              search:{},
              code_01:code_01
          }
        },
       methods:{
           getData(){
               this.$message.success(JSON.stringify(this.search));
           }
       }
    }
</script>

<style scoped>

</style>
