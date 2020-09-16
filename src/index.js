import VueDraggableResizable from 'vue-draggable-resizable';
// 可选择导入默认样式
import ToolMinx from "./Mixins/ToolMinx";

const api = Object.create(null)

const version = '0.0.2';

const components=require.context('./', true, /\.vue$/);

components.keys().forEach(fileName => {
    // 获取组件配置
    const componentModule = components(fileName)

    const componentConfig = componentModule.default || componentModule
    // 全局注册组件
    api[componentConfig.name]=componentConfig;
  })

const install = (Vue) => {
try{
    Vue.mixin(ToolMinx)
    Vue.component('vue-draggable-resizable', VueDraggableResizable);
    components.keys().forEach(fileName => {
        // 获取组件配置
        const componentModule = components(fileName);
        const Config = componentModule.default || componentModule;
        Vue.component(Config.name, Config);
    });
}catch (e) {
    throw e;
}
};

export {api}

export default {
    install,
}
