/**
 * update router
 * 本地静态路由数据配置，该配置由开发人员维护
 * 路由菜单配置，数据格式必须遵循一下规则，否则请自定义修改
 * **** true false 也可以用0 和 1代替，必须为数值或者boolean ****
 * path					必填 请求路径
 * component		必填 组件路径，默认在views/目录下，但不用填写views/
 * name         必填 必须英文，默认不展示，直接replaceAll '/' 不填写时，默认为当前组件名
 * icon         菜单、tagsView 图标，阿里：加 `iconfont xxx`，fontawesome：加 `fa xxx`
 * title        必填 菜单栏及 tagsView 栏、菜单搜索名称（国际化）
 * auth					必填 是否授权登录可访问 默认true
 * sort	  			排序
 * isLink   		是否超链接菜单与 isIframe 互斥
 * isIframe 		是否内嵌窗口与 isLink 互斥
 * address 			当 isLink isIframe两者为true时此项必填
 * isHide   		是否隐藏此路由
 * isHideSubMenu是否隐藏对应子路由
 * isKeepAlive	是否缓存组件状态
 * isAffix  		是否固定在 tagsView 栏上
 * isDisable  	是否禁用
 * isMobile  		是否为手机端
 * roles    		判断是否有当前角色，仅仅当前端控制权限时，此项必须，不建议前端去搞这玩意
 * permission   当前操作权限[C,R,U,D]
 * children
 */
export default {
	menus: [
		{
			id: 1,
			path: "home",
			component: "Home",
			name: "message.menu.home",
			title: "message.menu.home",
			icon: "icon-home",
			auth: 1,
			isLink: 0,
			isIframe: 0,
			address: "",
			isHide: 0,
			isHideSubMenu: 0,
			isAffix: 1,
			isKeepAlive: 1,
			isDisable: 0,
			isMobile: 0,
			roles: ["admin", "system"],
			permission: ["C", "R", "U", "D"],
			children: [],
		},
		{
			id: 90,
			path: "system",
			component: "layout/Index",
			name: "message.menu.system",
			title: "message.menu.system",
			icon: "icon-setting",
			auth: 1,
			isLink: 0,
			isIframe: 0,
			address: "",
			isAffix: 0,
			isKeepAlive: 0,
			isDisable: 0,
			isHide: 0,
			isHideSubMenu: 0,
			isMobile: 0,
			roles: ["admin", "system"],
			permission: ["C", "R", "U", "D"],
			children: [
				{
					id: 91,
					path: "user",
					component: "system/user/UserList",
					name: "message.menu.systemUser",
					title: "message.menu.systemUser",
					icon: "icon-user",
					auth: 1,
					isLink: 0,
					isIframe: 0,
					address: "",
					isAffix: 0,
					isKeepAlive: 0,
					isDisable: 0,
					isHide: 0,
					isHideSubMenu: 1,
					isMobile: 0,
					roles: ["admin", "system"],
					permission: ["C", "R", "U", "D"],
					children: [],
				},
				{
					id: 92,
					path: "role",
					component: "system/role/RoleList",
					name: "message.menu.systemRole",
					title: "message.menu.systemRole",
					icon: "icon-user",
					auth: 1,
					isLink: 0,
					isIframe: 0,
					address: "",
					isAffix: 0,
					isKeepAlive: 0,
					isDisable: 0,
					isHide: 0,
					isHideSubMenu: 1,
					isMobile: 0,
					roles: ["admin", "system"],
					permission: ["C", "R", "U", "D"],
					children: [],
				},
				{
					id: 93,
					path: "department",
					component: "system/department/DepartmentList",
					name: "message.menu.systemDepartment",
					title: "message.menu.systemDepartment",
					icon: "icon-user",
					auth: 1,
					isLink: 0,
					isIframe: 0,
					address: "",
					isAffix: 0,
					isKeepAlive: 0,
					isDisable: 0,
					isHide: 0,
					isHideSubMenu: 1,
					isMobile: 0,
					roles: ["admin", "system"],
					permission: ["C", "R", "U", "D"],
					children: [],
				},
				{
					id: 94,
					path: "post",
					component: "system/post/PostList",
					name: "message.menu.systemPost",
					title: "message.menu.systemPost",
					icon: "icon-user",
					auth: 1,
					isLink: 0,
					isIframe: 0,
					address: "",
					isAffix: 0,
					isKeepAlive: 0,
					isDisable: 0,
					isHide: 0,
					isHideSubMenu: 1,
					isMobile: 0,
					roles: ["admin", "system"],
					permission: ["C", "R", "U", "D"],
					children: [],
				},
				{
					id: 99,
					path: "menu",
					component: "system/menu/MenuList",
					name: "message.menu.systemMenu",
					title: "message.menu.systemMenu",
					icon: "icon-layout",
					auth: 1,
					isLink: 0,
					isIframe: 0,
					address: "",
					isAffix: 0,
					isKeepAlive: 0,
					isDisable: 0,
					isHide: 0,
					isHideSubMenu: 1,
					isMobile: 0,
					roles: ["admin", "system"],
					permission: ["C", "R", "U", "D"],
					children: [
						{
							id: 991,
							path: "add-edit",
							component: "system/menu/MenuEdit",
							name: "message.menu.systemMenu",
							title: "message.menu.systemMenu",
							icon: "icon-layout",
							auth: 1,
							isLink: 0,
							isIframe: 0,
							address: "",
							isAffix: 0,
							isKeepAlive: 0,
							isDisable: 0,
							isHide: 1,
							isHideSubMenu: 1,
							isMobile: 0,
							roles: ["admin", "system"],
							permission: ["C", "R", "U", "D"],
						},
					],
				},
			],
		},
		{
			id: 900,
			path: "demo",
			component: "layout/Index",
			name: "message.menu.demo",
			title: "message.menu.demo",
			icon: "icon-changyongshili",
			auth: 1,
			isLink: 0,
			isIframe: 0,
			address: "",
			isAffix: 1,
			isKeepAlive: 1,
			isDisable: 0,
			isHide: 0,
			isHideSubMenu: 0,
			isMobile: 0,
			roles: ["admin", "system"],
			permission: ["C", "R", "U", "D"],
			children: [
				{
					id: 901,
					path: "page",
					component: "demo/page/All",
					name: "message.menu.demoPage",
					title: "message.menu.demoPage",
					icon: "icon-appstore",
					auth: 1,
					isLink: 0,
					isIframe: 0,
					address: "",
					isAffix: 1,
					isKeepAlive: 1,
					isDisable: 0,
					isHide: 0,
					isHideSubMenu: 1,
					isMobile: 0,
					roles: ["admin", "system"],
					permission: ["C", "R", "U"],
					children: [],
				},
				{
					id: 902,
					path: "icon",
					component: "demo/icon/Iconify",
					name: "message.menu.demoIcon",
					title: "message.menu.demoIcon",
					icon: "icon-appstore",
					auth: 1,
					isLink: 0,
					isIframe: 0,
					address: "",
					isAffix: 1,
					isKeepAlive: 1,
					isDisable: 0,
					isHide: 0,
					isHideSubMenu: 1,
					isMobile: 0,
					roles: ["admin", "system"],
					permission: ["C", "R", "U", "D"],
					children: [],
				},
				{
					id: 903,
					path: "internal",
					component: "demo/animation/Internal",
					name: "message.menu.demoAnimaCss",
					title: "message.menu.demoAnimaCss",
					icon: "icon-appstore",
					auth: 1,
					isLink: 0,
					isIframe: 0,
					address: "",
					isAffix: 1,
					isKeepAlive: 1,
					isDisable: 0,
					isHide: 0,
					isHideSubMenu: 1,
					isMobile: 0,
					roles: ["admin", "system"],
					permission: ["C", "R", "U", "D"],
					children: [],
				},
				{
					id: 904,
					path: "office-xlsx",
					component: "demo/office/Xlsx",
					name: "message.menu.demoXlsx",
					title: "message.menu.demoXlsx",
					icon: "icon-appstore",
					auth: 1,
					isLink: 0,
					isIframe: 0,
					address: "",
					isAffix: 1,
					isKeepAlive: 1,
					isDisable: 0,
					isHide: 0,
					isHideSubMenu: 1,
					isMobile: 0,
					roles: ["admin", "system"],
					permission: ["C", "R", "U", "D"],
					children: [],
				},
				{
					id: 905,
					path: "echart",
					component: "demo/chart/Echart",
					name: "message.menu.demoEchart",
					title: "message.menu.demoEchart",
					icon: "icon-appstore",
					auth: 1,
					isLink: 0,
					isIframe: 0,
					address: "",
					isAffix: 1,
					isKeepAlive: 1,
					isDisable: 0,
					isHide: 0,
					isHideSubMenu: 1,
					isMobile: 0,
					roles: ["admin", "system"],
					permission: ["C", "R", "U", "D"],
					children: [],
				},
				{
					id: 906,
					path: "slide",
					component: "demo/slide/Swiper",
					name: "message.menu.demoSwiper",
					title: "message.menu.demoSwiper",
					icon: "icon-appstore",
					auth: 1,
					isLink: 0,
					isIframe: 0,
					address: "",
					isAffix: 1,
					isKeepAlive: 1,
					isDisable: 0,
					isHide: 0,
					isHideSubMenu: 1,
					isMobile: 0,
					roles: ["admin", "system"],
					permission: ["C", "R", "U", "D"],
					children: [],
				},
				{
					id: 907,
					path: "wifi",
					component: "demo/wifi/Index",
					name: "message.menu.demoWifi",
					title: "message.menu.demoWifi",
					icon: "icon-appstore",
					auth: 1,
					isLink: 0,
					isIframe: 0,
					address: "",
					isAffix: 1,
					isKeepAlive: 1,
					isDisable: 0,
					isHide: 0,
					isHideSubMenu: 1,
					isMobile: 0,
					roles: ["admin", "system"],
					permission: ["C", "R", "U", "D"],
					children: [],
				},
				{
					id: 908,
					path: "time",
					component: "demo/time/Select",
					name: "message.menu.demoTimeSelect",
					title: "message.menu.demoTimeSelect",
					icon: "icon-appstore",
					auth: 1,
					isLink: 0,
					isIframe: 0,
					address: "",
					isAffix: 1,
					isKeepAlive: 1,
					isDisable: 0,
					isHide: 0,
					isHideSubMenu: 1,
					isMobile: 0,
					roles: ["admin", "system"],
					permission: ["C", "R", "U", "D"],
					children: [],
				},
				{
					id: 909,
					path: "lottery",
					component: "demo/lottery/Index",
					name: "message.menu.demoLottery",
					title: "message.menu.demoLottery",
					icon: "icon-appstore",
					auth: 1,
					isLink: 0,
					isIframe: 0,
					address: "",
					isAffix: 1,
					isKeepAlive: 1,
					isDisable: 0,
					isHide: 0,
					isHideSubMenu: 1,
					isMobile: 0,
					roles: ["admin", "system"],
					permission: ["C", "R", "U", "D"],
					children: [],
				},
				{
					id: 910,
					path: "activity",
					component: "demo/activity/Index",
					name: "message.menu.demoActivity",
					title: "message.menu.demoActivity",
					icon: "icon-appstore",
					auth: 1,
					isLink: 0,
					isIframe: 0,
					address: "",
					isAffix: 1,
					isKeepAlive: 1,
					isDisable: 0,
					isHide: 0,
					isHideSubMenu: 1,
					isMobile: 0,
					roles: ["admin", "system"],
					permission: ["C", "R", "U", "D"],
					children: [
						{
							id: 91001,
							path: "add-edit",
							component: "demo/activity/AddEdit",
							name: "message.menu.demoActivity",
							title: "message.menu.demoActivity",
							icon: "icon-appstore",
							auth: 1,
							isLink: 0,
							isIframe: 0,
							address: "",
							isAffix: 1,
							isKeepAlive: 1,
							isDisable: 0,
							isHide: 1,
							isHideSubMenu: 1,
							isMobile: 0,
							roles: ["admin", "system"],
							permission: ["C", "R", "U", "D"],
							children: [],
						},
					],
				},
			],
		},
		{
			id: 991,
			path: "link",
			component: "layout/window/Link",
			name: "message.menu.testLink",
			title: "message.menu.testLink",
			icon: "icon-home",
			auth: 1,
			isLink: 1,
			isIframe: 0,
			address: "https://cn.bing.com/",
			isAffix: 1,
			isKeepAlive: 1,
			isDisable: 0,
			isHide: 0,
			isHideSubMenu: 0,
			isMobile: 0,
			roles: ["admin", "system"],
			permission: ["C", "R", "U", "D"],
			children: [],
		},
		{
			id: 992,
			path: "iframe",
			component: "layout/window/Iframe",
			name: "message.menu.testIframe",
			title: "message.menu.testIframe",
			icon: "icon-home",
			auth: 1,
			isLink: 0,
			isIframe: 1,
			address: "https://nodejs.org/",
			isAffix: 1,
			isKeepAlive: 1,
			isDisable: 0,
			isHide: 0,
			isHideSubMenu: 0,
			isMobile: 0,
			roles: ["admin", "system"],
			permission: ["C", "R", "U", "D"],
			children: [],
		},
		{
			id: 9000,
			path: "m-home",
			component: "mobile/MHome",
			name: "message.menu.home",
			title: "message.menu.home",
			icon: "icon-home",
			auth: 1,
			isLink: 0,
			isIframe: 0,
			address: "",
			isAffix: 1,
			isKeepAlive: 1,
			isDisable: 0,
			isHide: 0,
			isHideSubMenu: 0,
			isMobile: 1,
			roles: ["admin", "system"],
			permission: ["C", "R", "U", "D"],
			children: [],
		},
	],
};
