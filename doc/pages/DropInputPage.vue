<template>
    <div>
        <drop-input >
            <drop-input-item label="UID" prop="uid">
                <a-input placeholder="请输入UID"  v-model="search.uid"></a-input>
            </drop-input-item>
            <drop-input-item label="PUSHID" prop="pushId">
                <a-input placeholder="请输入PUSHID"  v-model="search.pushId"></a-input>
            </drop-input-item>
        </drop-input>
        <p>

            <a-form layout="inline">
                <a-form-item label="UID">
                    {{search.uid?search.uid:"-"}}
                </a-form-item>
                <a-form-item label="PUSHID">
                    {{search.pushId?search.pushId:"-"}}
                </a-form-item>
            </a-form>
        </p>
        <code-view v-model="code"></code-view>
    </div>
</template>

<script>
    import CodeView from "@/components/CodeView/CodeView.vue";
    export default {
        name: "DropInputPage",
        components:{
            CodeView
        },
        data(){
            return {
                search:{},
                code:`<drop-input >
            <drop-input-item label="UID" prop="uid">
                <a-input placeholder="请输入UID"  v-model="search.uid"></a-input>
            </drop-input-item>
            <drop-input-item label="PUSHID" prop="pushId">
                <a-input placeholder="请输入PUSHID"  v-model="search.pushId"></a-input>
            </drop-input-item>
        </drop-input>`
            }
        }
    }
</script>

<style scoped>

</style>
