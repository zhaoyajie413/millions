<template>
    <div>
        <a-button @click="()=>$refs.iconSelect.visible=true" type="primary">选择小图标</a-button>
        <icon-select ref="iconSelect"></icon-select>
    </div>
</template>

<script>
    export default {
        name: "IconSelectPage"
    }
</script>

<style scoped>

</style>
