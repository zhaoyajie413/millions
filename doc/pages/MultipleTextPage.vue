<template>
    <div>
        <h2>文字省略组件</h2>
        <h3>默认为单行注释</h3>
        <div style="width: 160px">
        <multiple-text>
            213为我去饿我去饿我去恶趣味我去饿
        </multiple-text>
        </div>
        <code-view v-model="code_01" ></code-view>
         <h3>多行注释：line</h3>
        <div style="width: 300px">
            <multiple-text line="3">
                魏忠贤（1568年－1627年12月11日），字完吾，北直隶肃宁（今河北沧州肃宁县）人，汉族，明朝末期宦官。自宫后改姓名叫李进忠，由才人王氏复姓，出任秉笔太监后，改回原姓，皇帝赐名为魏忠贤。明熹宗时期，出任司礼秉笔太监，极受宠信，被称为“九千九百岁”，排除异己，专断国政，以致人们“只知有忠贤，而不知有皇上”。
            </multiple-text>
        </div>
        <code-view v-model="code_02" ></code-view>
    </div>
</template>

<script>
    export default {
        name: "MultipleTextPage",
        data(){
            return {
                code_01:`<div style="width: 160px">
            <multiple-text>
                213为我去饿我去饿我去恶趣味我去饿
            </multiple-text>
        </div>`,
                code_02:`<div style="width: 300px">
            <multiple-text line="3">
                魏忠贤（1568年－1627年12月11日），字完吾，北直隶肃宁（今河北沧州肃宁县）人，汉族，明朝末期宦官。自宫后改姓名叫李进忠，由才人王氏复姓，出任秉笔太监后，改回原姓，皇帝赐名为魏忠贤。明熹宗时期，出任司礼秉笔太监，极受宠信，被称为“九千九百岁”，排除异己，专断国政，以致人们“只知有忠贤，而不知有皇上”。
            </multiple-text>
        </div>`
            }
        }
    }
</script>

<style scoped>

</style>
