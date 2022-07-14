/**
 * 路由 配置
 */
import { RouteRecordRaw } from "vue-router";

/**
 * path 必填
 * component 必填
 * name 选填 必须英文，默认不展示，直接replaceAll '/'
 * meta: {
 *      title:          菜单栏及 tagsView 栏、菜单搜索名称（国际化）
 *      isLink：        是否超链接菜单
 *      isHide：        是否隐藏此路由
 *      isKeepAlive：   是否缓存组件状态
 *      isAffix：       是否固定在 tagsView 栏上
 *      isIframe：      是否内嵌窗口
 *      roles：         仅仅当前端控制权限时，此项必须非空
 *      icon：          菜单、tagsView 图标，阿里：加 `iconfont xxx`，fontawesome：加 `fa xxx`
 * }
 */

/**
 * 定义404、401界面
 * @link 参考：https://next.router.vuejs.org/zh/guide/essentials/history-mode.html#netlify
 */
export const errorRoutes = [
	{
		path: "/:path(.*)*",
		name: "redirect",
		redirect: "/404",
	},
	{
		path: "/401",
		name: "noPower",
		component: () => import("@/views/error/401.vue"),
		meta: {
			title: "message.staticRoutes.noPower",
			isHide: true,
		},
	},
	{
		path: "/404",
		name: "notFound",
		component: () => import("@/views/error/404.vue"),
		meta: {
			title: "message.staticRoutes.noPower",
			isHide: true,
		},
	},
	{
		path: "/500",
		name: "serverError",
		component: () => import("@/views/error/500.vue"),
		meta: {
			title: "message.staticRoutes.noPower",
			isHide: true,
		},
	},
];

export const baseRoutes: Array<RouteRecordRaw> = [
	{
		path: "",
		name: "",
		component: () => import("@/views/layout/Index.vue"),
		meta: { title: "message.router.login" },
		children: [
			// 请不要往这里 `children` 中添加内容，此内容为了防止 No match found for location with path "xxx" 问题
			...errorRoutes,
		],
	},
	{
		path: "/login",
		name: "login",
		component: () => import("@/views/login/Login.vue"),
		meta: { title: "message.router.login" },
	},
	{
		path: "/register",
		name: "register",
		component: () => import("@/views/login/Register.vue"),
		meta: { title: "message.router.register" },
	},
	{
		path: "/auth",
		name: "auth",
		component: () => import("@/views/login/Auth.vue"),
		meta: { title: "message.router.auth" },
	},
];

export default baseRoutes;
