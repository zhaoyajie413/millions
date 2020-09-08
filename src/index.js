import Vue from 'vue'
import VueDraggableResizable from 'vue-draggable-resizable';
// 可选择导入默认样式
import ToolMinx from "./mixins/ToolMinx";

Vue.mixin(ToolMinx)

Vue.component('vue-draggable-resizable', VueDraggableResizable);

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

const install = () => {
   components.keys().forEach(fileName => {
       // 获取组件配置
       const componentModule = components(fileName);

       const Config = componentModule.default || componentModule
		 // 全局注册组件
        Vue.component(Config.name, Config);
    });
};

export {api}

export default {
    install,
}
