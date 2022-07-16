/**
 * 若为后端返回数据那么数据及必返回如下 true false 也可以用0 和 1代替，必须为数值或者number
 * path					必填
 * component		必填
 * name					选填 必须英文，默认不展示，直接replaceAll '/'
 * title				必填 菜单栏及 tagsView 栏、菜单搜索名称（国际化）
 * isLink   		是否超链接菜单与 isIframe 互斥
 * isIframe 		是否内嵌窗口与 isLink 互斥
 * address 			当 isLink isIframe两者为true时此项必填
 * isHide   		是否隐藏此路由
 * isKeepAlive	是否缓存组件状态
 * isAffix  		是否固定在 tagsView 栏上
 * roles    		仅仅当前端控制权限时，此项必须
 * icon     		必填 菜单、tagsView 图标，阿里：加 `iconfont xxx`，fontawesome：加 `fa xxx`
 */
export default {
	menus: [
		{
			id: 1,
			path: "home",
			component: "home/Home",
			name: "首页",
			title: "message.staticRoutes.noPower",
			icon: "icon-home",
			isLink: false,
			isIframe: false,
			address: "",
			isAffix: true,
			isKeepAlive: true,
			isDisable: false,
			isHide: false,
			isHideSubMenu: false,
			roles: ["admin", "system"],
			children: [],
		},
		{
			id: 99,
			path: "system",
			component: "layout/Index",
			name: "系统管理",
			title: "message.staticRoutes.noPower",
			icon: "icon-home",
			isLink: false,
			isIframe: false,
			address: "",
			isAffix: false,
			isKeepAlive: false,
			isDisable: false,
			isHide: false,
			isHideSubMenu: false,
			roles: ["admin", "system"],
			children: [
				{
					id: 991,
					path: "menu",
					component: "system/menu/List",
					name: "菜单设置",
					title: "message.staticRoutes.noPower",
					icon: "icon-home",
					isLink: false,
					isIframe: false,
					address: "",
					isAffix: false,
					isKeepAlive: false,
					isDisable: false,
					isHide: false,
					isHideSubMenu: true,
					roles: ["admin", "system"],
					children: [
						{
							id: 9911,
							path: "add",
							component: "system/menu/Add",
							name: "菜单新增",
							title: "message.staticRoutes.noPower",
							icon: "icon-home",
							isLink: false,
							isIframe: false,
							address: "",
							isAffix: false,
							isKeepAlive: false,
							isDisable: false,
							isHide: true,
							isHideSubMenu: false,
							roles: ["admin", "system"],
							children: [],
						},
					],
				},
				{
					id: 992,
					path: "user",
					component: "system/user/List",
					name: "用户设置",
					title: "message.staticRoutes.noPower",
					icon: "icon-home",
					isLink: false,
					isIframe: false,
					address: "",
					isAffix: false,
					isKeepAlive: false,
					isDisable: false,
					isHide: false,
					isHideSubMenu: true,
					roles: ["admin", "system"],
					children: [
						{
							id: 9921,
							path: "add",
							component: "system/user/Add",
							name: "用户新增",
							title: "message.staticRoutes.noPower",
							icon: "icon-home",
							isLink: false,
							isIframe: false,
							address: "",
							isAffix: false,
							isKeepAlive: false,
							isDisable: false,
							isHide: true,
							isHideSubMenu: false,
							roles: ["admin", "system"],
							children: [],
						},
					],
				},
			],
		},
	],
};
