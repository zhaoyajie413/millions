import Vue from 'vue'
import Router from 'vue-router'

export const constantRouterMap = [
    {
        path:"/",
        component:()=>import("@pages/Main.vue")
    },
  {
     path:"/TabsCard",
     component:()=>import("@pages/TabsCardPage.vue")
  },
    {
        path:"/MultipleText",
        component:()=>import("@pages/MultipleTextPage.vue")
    },
    {
        path:"/enlargeImagePage",
        component:()=>import("@pages/EnlargeImagePage.vue")
    },
    {
        path:"/uploadImagePage",
        component:()=>import("@pages/UploadImagePage.vue")
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
