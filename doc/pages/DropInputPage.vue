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
    </div>
</template>

<script>
    export default {
        name: "DropInputPage",
        data(){
            return {
                search:{}
            }
        }
    }
</script>

<style scoped>

</style>
