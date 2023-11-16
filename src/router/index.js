import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"

const Layout = () => import("@/layout/index.vue")
export const constantRoutes = [
    {
        path: "/",
        component: Layout,
        redirect: "/dashboard",
        children: [
            {
                path: "dashboard",
                component: () => import("@/views/dashboard/index.vue"),
                name: "Dashboard",
                meta: {
                    title: "首页",
                    svgIcon: "dashboard",
                    affix: true
                }
            }
        ]
    },
    {
        path: "/menu",
        component: Layout,
        redirect: "/menu/menu1",
        name: "Menu",
        meta: {
            title: "多级路由",
            svgIcon: "menu"
        },
        children: [
            {
                path: "menu1",
                redirect: "/menu/menu1/menu1-1",
                name: "Menu1",
                meta: {
                    title: "menu1"
                },
                children: [
                    {
                        path: "menu1-1",
                        component: () => import("@/views/menu/menu1/menu1-1/index.vue"),
                        name: "Menu1-1",
                        meta: {
                            title: "menu1-1",
                            keepAlive: true
                        }
                    },
                    {
                        path: "menu1-2",
                        redirect: "/menu/menu1/menu1-2/menu1-2-1",
                        name: "Menu1-2",
                        meta: {
                            title: "menu1-2"
                        },
                        children: [
                            {
                                path: "menu1-2-1",
                                component: () => import("@/views/menu/menu1/menu1-2/menu1-2-1/index.vue"),
                                name: "Menu1-2-1",
                                meta: {
                                    title: "menu1-2-1",
                                    keepAlive: true
                                }
                            },
                            {
                                path: "menu1-2-2",
                                component: () => import("@/views/menu/menu1/menu1-2/menu1-2-2/index.vue"),
                                name: "Menu1-2-2",
                                meta: {
                                    title: "menu1-2-2",
                                    keepAlive: true
                                }
                            }
                        ]
                    },
                    {
                        path: "menu1-3",
                        component: () => import("@/views/menu/menu1/menu1-3/index.vue"),
                        name: "Menu1-3",
                        meta: {
                            title: "menu1-3",
                            keepAlive: true
                        }
                    }
                ]
            },
            {
                path: "menu2",
                component: () => import("@/views/menu/menu2/index.vue"),
                name: "Menu2",
                meta: {
                    title: "menu2",
                    keepAlive: true
                }
            }
        ]
    },

    {
        path: "/login",
        component: () => import("@/views/login/index.vue"),
        meta: {
            hidden: true
        }
    },
]

export const asyncRoutes = [
    {
        path: "/permission",
        component: Layout,
        redirect: "/permission/page",
        name: "Permission",
        meta: {
            title: "权限管理",
            svgIcon: "lock",
            roles: [1, 2, 3], // 可以在根路由中设置角色
            alwaysShow: true // 将始终显示根菜单
        },
        children: [
            {
                path: "page",
                component: () => import("@/views/permission/page.vue"),
                name: "PagePermission",
                meta: {
                    title: "页面权限",
                    roles: [1] // 或者在子导航中设置角色
                }
            },
            {
                path: "directive",
                component: () => import("@/views/permission/directive.vue"),
                name: "DirectivePermission",
                meta: {
                    title: "指令权限" // 如果未设置角色，则表示：该页面不需要权限，但会继承根路由的角色
                }
            }
        ]
    },
    {
        path: "/:pathMatch(.*)*", // Must put the 'ErrorPage' route at the end, 必须将 'ErrorPage' 路由放在最后
        redirect: "/404",
        name: "ErrorPage",
        meta: {
            hidden: true
        }
    }
]


const router = createRouter({
    history:
        import.meta.env.VITE_ROUTER_HISTORY === "hash"
            ? createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH)
            : createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
    routes: constantRoutes
})



/** 重置路由 */
export function resetRouter() {
    // 注意：所有动态路由路由必须带有 Name 属性，否则可能会不能完全重置干净
    try {
        router.getRoutes().forEach((route) => {
            const { name, meta } = route
            if (name && meta.roles?.length) {
                router.hasRoute(name) && router.removeRoute(name)
            }
        })
    } catch (error) {
        // 强制刷新浏览器也行，只是交互体验不是很好
        window.location.reload()
    }
}

export default router
