<template>
    <div>
        <h3>页面布局组件</h3>
        <p></p>
        <h4>单个tab页</h4>
        <tabs-card title="足球风云">
            <template v-slot:content>
                《足球风云》是大岛司关于足球的漫画作品，先后推出电视版、剧场版、电影版及游戏。作品日文原名为“シュート!”，动画化时名为“苍き伝说
                シュート!”，而中文版两者皆名为“足球风云”。电视版于日本的播放日期为1993年11月7日至1994年12月15日。
                三名酷爱足球，自封“黄金三角”的高中生，田仲俊彦、白石健二和平松和广，一心想与在德国学艺、向以球技凌厉的久保嘉晴成为同窗，而一起考进了挂川高中。有但三人怎么也没想到它们与久保建立的一段友谊，将从此改写他们一生的命运，从而牵引出一个交织着青春的血与泪的感人故事……
            </template>
        </tabs-card>
        <code-view :value="code_01"></code-view>
        <h4>多个tab页</h4>
        <tabs-card title="足球风云">
            <tabs-card-item label="活动套餐" :tabindex="0" >
                三德子小太监
                <p>
                    《中国最后一个太监》是由张之亮执导，莫少聪、温碧霞等主演的剧情片。影片讲述了穷孩子来喜为求全家丰衣足食而自请净身，却碰上废除帝制而改去学戏，后为逃避军阀追踪而混入紫禁城当了太监，又在不久后被皇帝逐出紫禁城而开始漂泊生涯的故事。该片于1987年10月24日在中国台湾上映。
                </p>
            </tabs-card-item>
            <tabs-card-item label="套餐上架" :tabindex="1"  >
                欲练此功必先自宫
                <p>
                    魏忠贤（1568年－1627年12月11日），字完吾，北直隶肃宁（今河北沧州肃宁县）人，汉族，明朝末期宦官。自宫后改姓名叫李进忠，由才人王氏复姓，出任秉笔太监后，改回原姓，皇帝赐名为魏忠贤。明熹宗时期，出任司礼秉笔太监，极受宠信，被称为“九千九百岁”，排除异己，专断国政，以致人们“只知有忠贤，而不知有皇上”。
                </p>
            </tabs-card-item>
        </tabs-card>
        <code-view v-model="code_02"></code-view>
        <h4>右侧操作栏</h4>
        <p>operations</p>
        <tabs-card title="足球风云">
            <template v-slot:content>
                《足球风云》是大岛司关于足球的漫画作品，先后推出电视版、剧场版、电影版及游戏。作品日文原名为“シュート!”，动画化时名为“苍き伝说 シュート!”，而中文版两者皆名为“足球风云”。电视版于日本的播放日期为1993年11月7日至1994年12月15日。
                三名酷爱足球，自封“黄金三角”的高中生，田仲俊彦、白石健二和平松和广，一心想与在德国学艺、向以球技凌厉的久保嘉晴成为同窗，而一起考进了挂川高中。有但三人怎么也没想到它们与久保建立的一段友谊，将从此改写他们一生的命运，从而牵引出一个交织着青春的血与泪的感人故事……
            </template>
            <template v-slot:operations>
                <a-button style="margin-right: 8px" type="primary">新增套餐</a-button>
                <a-button style="margin-right: 8px" type="primary">编辑套餐</a-button>
                <a-button style="margin-right: 8px" type="primary">套餐上传</a-button>
                <a-button type="primary">套餐套餐导出</a-button>
            </template>
        </tabs-card>
        <code-view v-model="code_03"></code-view>
    </div>
</template>

<script>
    import CodeView from "@/components/CodeView/CodeView.vue";
    export default {
        name: "TabsCardPage",
        components:{
            CodeView
        },
        data(){
            return {
                code_01:`<tabs-card title="足球风云">
            <template v-slot:content>
                《足球风云》是大岛司关于足球的漫画作品，先后推出电视版、剧场版、电影版及游戏。作品日文原名为“シュート!”，动画化时名为“苍き伝说
                シュート!”，而中文版两者皆名为“足球风云”。电视版于日本的播放日期为1993年11月7日至1994年12月15日。
                三名酷爱足球，自封“黄金三角”的高中生，田仲俊彦、白石健二和平松和广，一心想与在德国学艺、向以球技凌厉的久保嘉晴成为同窗，而一起考进了挂川高中。有但三人怎么也没想到它们与久保建立的一段友谊，将从此改写他们一生的命运，从而牵引出一个交织着青春的血与泪的感人故事……
            </template>
        </tabs-card>`,
                code_02:`<tabs-card title="足球风云">
            <tabs-card-item label="活动套餐" :tabindex="0" >
                三德子小太监
                <p>
                    《中国最后一个太监》是由张之亮执导，莫少聪、温碧霞等主演的剧情片。影片讲述了穷孩子来喜为求全家丰衣足食而自请净身，却碰上废除帝制而改去学戏，后为逃避军阀追踪而混入紫禁城当了太监，又在不久后被皇帝逐出紫禁城而开始漂泊生涯的故事。该片于1987年10月24日在中国台湾上映。
                </p>
            </tabs-card-item>
            <tabs-card-item label="套餐上架" :tabindex="1"  >
                欲练此功必先自宫
                <p>
                    魏忠贤（1568年－1627年12月11日），字完吾，北直隶肃宁（今河北沧州肃宁县）人，汉族，明朝末期宦官。自宫后改姓名叫李进忠，由才人王氏复姓，出任秉笔太监后，改回原姓，皇帝赐名为魏忠贤。明熹宗时期，出任司礼秉笔太监，极受宠信，被称为“九千九百岁”，排除异己，专断国政，以致人们“只知有忠贤，而不知有皇上”。
                </p>
            </tabs-card-item>
        </tabs-card>`,
                code_03:`<tabs-card title="足球风云">
            <template v-slot:content>
                《足球风云》是大岛司关于足球的漫画作品，先后推出电视版、剧场版、电影版及游戏。作品日文原名为“シュート!”，动画化时名为“苍き伝说 シュート!”，而中文版两者皆名为“足球风云”。电视版于日本的播放日期为1993年11月7日至1994年12月15日。
                三名酷爱足球，自封“黄金三角”的高中生，田仲俊彦、白石健二和平松和广，一心想与在德国学艺、向以球技凌厉的久保嘉晴成为同窗，而一起考进了挂川高中。有但三人怎么也没想到它们与久保建立的一段友谊，将从此改写他们一生的命运，从而牵引出一个交织着青春的血与泪的感人故事……
            </template>
                     <template v-slot:operations>
                         <a-button type="primary">新增套餐</a-button>
                         <a-button type="primary">编辑套餐</a-button>
                         <a-button type="primary">套餐上传</a-button>
                         <a-button type="primary">套餐套餐导出</a-button>
                     </template>
            </tabs-card>`
            }
        }
    }
</script>

<style scoped>

</style>
