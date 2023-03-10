import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    component: () => import("@/views/index/index.vue"),
    alias: "/index",
    meta: {
      title: "首页"
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

