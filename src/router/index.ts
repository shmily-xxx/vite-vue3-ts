import { createRouter, createRouterMatcher, createWebHistory, RouteRecordRaw } from "vue-router";
 const layout=() => import('layout/index.vue')
const routes: RouteRecordRaw[] = [
  {
		path: "/",
		name: "index",
    meta: {
      title: 'vite-vue-ts'
    },
		component: () => import('views/index/index.vue'),
		children: [],
	},
  {
    path: '/login',
    component: () => import('views/login/login.vue'),
    name: 'login',
    meta: {
      title: '登录页'
    }
  },
  {
    path: '/page',
    component: layout,
    children: [
      {
        path: 'page1',
        component: () => import('views/page/page1.vue'),
        meta: {
          title: 'page1'
        },
      }
    ],
  },
  {
    path: '/x',
    component: () => import('layout/x.vue'),
    name: 'x',
    meta: {
      title: '登录页'
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes:routes
})

// 前置路由
router.beforeEach((to, from, next) => {
  next()
})

export default router