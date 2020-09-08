import Vue from 'vue'
import Router from 'vue-router'

export const constantRouterMap = [
    {
        path:"/",
        component:()=>import("@pages/main.vue")
    },
  {
     path:"/TabsCard",
     component:()=>import("@pages/TabsCardPage.vue")
  },
    {
        path:"/multipleText",
        component:()=>import("@pages/MultipleTextPage.vue")
    },
    {
        path:"/enlargeImagePage",
        component:()=>import("@pages/enlargeImagePage.vue")
    },
    {
        path:"/uploadImagePage",
        component:()=>import("@pages/uploadImagePage.vue")
    },
    {
        path:"/iconSelectPage",
        component:()=>import("@pages/IconSelectPage.vue")
    },
    {
        path:"/iconSelectPage",
        component:()=>import("@pages/IconSelectPage.vue")
    },
    {
        path:"/dropInputPage",
        component:()=>import("@pages/DropInputPage.vue")
    },
    {
        path:"/queryScreenPage",
        component:()=>import("@pages/QueryScreenPage.vue")
    },
    {
        path:"/tableDynamicPage",
        component:()=>import("@pages/TableDynamicPage.vue")
    },

]

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
