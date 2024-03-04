/**
 * update router
 * 本地静态路由数据配置，该配置由开发人员维护
 * 路由菜单配置，数据格式必须遵循一下规则，否则请自定义修改
 * **** true false 也可以用 0 和 1 代替，必须为数值或者boolean ****
 * path					必填 请求路径
 * component		必填 组件路径，默认在views/目录下，但不用填写views/
 * auth					必填 是否授权登录可访问 默认true
 * isKeepAlive	是否缓存组件状态 默认true
 *
 * icon         菜单、tagsView 图标，阿里：加 `iconfont xxx`，fontawesome：加 `fa xxx`
 * title        必填 菜单栏及 tagsView 栏、菜单搜索名称（国际化）
 * type         菜单类型 1菜单 2目录
 * sort	  			排序 默认1
 * isHide   		是否隐藏，当前菜单 默认false
 * isDisable  	是否禁用 默认false
 * isLink   		是否超链接菜单与 isIframe 互斥 默认false
 * isIframe 		是否内嵌窗口与 isLink 互斥 默认false
 * address 			当 isLink isIframe两者为true时此项必填 默认
 *
 * isAffix  		是否固定在 tagsView 栏上 默认true
 * isMobile  		是否为手机端 默认false
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
			type: 1,
			title: "message.menu.home",
			icon: "icon-home",
			auth: 1,
			isLink: 0,
			isIframe: 0,
			address: "",
			isHide: 0,
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
			type: 2,
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
			isMobile: 0,
			roles: ["admin", "system"],
			permission: ["C", "R", "U", "D"],
			children: [
				{
					id: 91,
					path: "user",
					component: "system/user/UserList",
					type: 1,
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
					isMobile: 0,
					roles: ["admin", "system"],
					permission: ["C", "R", "U", "D"],
					children: [],
				},
				{
					id: 92,
					path: "role",
					component: "system/role/RoleList",
					type: 1,
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
					isMobile: 0,
					roles: ["admin", "system"],
					permission: ["C", "R", "U", "D"],
					children: [],
				},
				{
					id: 93,
					path: "department",
					component: "system/department/DepartmentList",
					type: 1,
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
					isMobile: 0,
					roles: ["admin", "system"],
					permission: ["C", "R", "U", "D"],
					children: [],
				},
				{
					id: 94,
					path: "post",
					component: "system/post/PostList",
					type: 1,
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
					isMobile: 0,
					roles: ["admin", "system"],
					permission: ["C", "R", "U", "D"],
					children: [],
				},
				{
					id: 99,
					path: "menu",
					component: "system/menu/MenuList",
					type: 1,
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
					isMobile: 0,
					roles: ["admin", "system"],
					permission: ["C", "R", "U", "D"],
					children: [
						{
							id: 991,
							path: "add-edit",
							component: "system/menu/MenuEdit",
							type: 1,
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
			type: 2,
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
			isMobile: 0,
			roles: ["admin", "system"],
			permission: ["C", "R", "U", "D"],
			children: [
				{
					id: 901,
					path: "page",
					component: "demo/page/All",
					type: 1,
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
					isMobile: 0,
					roles: ["admin", "system"],
					permission: ["C", "R", "U"],
					children: [],
				},
				{
					id: 902,
					path: "icon",
					component: "demo/icon/Iconify",
					type: 1,
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
					isMobile: 0,
					roles: ["admin", "system"],
					permission: ["C", "R", "U", "D"],
					children: [],
				},
				{
					id: 903,
					path: "internal",
					component: "demo/animation/Internal",
					type: 1,
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
					isMobile: 0,
					roles: ["admin", "system"],
					permission: ["C", "R", "U", "D"],
					children: [],
				},
				{
					id: 904,
					path: "office-xlsx",
					component: "demo/office/Xlsx",
					type: 1,
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
					isMobile: 0,
					roles: ["admin", "system"],
					permission: ["C", "R", "U", "D"],
					children: [],
				},
				{
					id: 905,
					path: "echart",
					component: "demo/chart/Echart",
					type: 1,
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
					isMobile: 0,
					roles: ["admin", "system"],
					permission: ["C", "R", "U", "D"],
					children: [],
				},
				{
					id: 906,
					path: "slide",
					component: "demo/slide/Swiper",
					type: 1,
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
					isMobile: 0,
					roles: ["admin", "system"],
					permission: ["C", "R", "U", "D"],
					children: [],
				},
				{
					id: 907,
					path: "wifi",
					component: "demo/wifi/Index",
					type: 1,
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
					isMobile: 0,
					roles: ["admin", "system"],
					permission: ["C", "R", "U", "D"],
					children: [],
				},
				{
					id: 908,
					path: "time",
					component: "demo/time/Select",
					type: 1,
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
					isMobile: 0,
					roles: ["admin", "system"],
					permission: ["C", "R", "U", "D"],
					children: [],
				},
				{
					id: 909,
					path: "lottery",
					component: "demo/lottery/Index",
					type: 1,
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
					isMobile: 0,
					roles: ["admin", "system"],
					permission: ["C", "R", "U", "D"],
					children: [],
				},
				{
					id: 910,
					path: "activity",
					component: "demo/activity/Index",
					type: 1,
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
					isMobile: 0,
					roles: ["admin", "system"],
					permission: ["C", "R", "U", "D"],
					children: [
						{
							id: 91001,
							path: "add-edit",
							component: "demo/activity/AddEdit",
							type: 1,
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
							isMobile: 0,
							roles: ["admin", "system"],
							permission: ["C", "R", "U", "D"],
							children: [],
						},
					],
				},
				{
					id: 911,
					path: "img",
					component: "demo/img/Index",
					type: 1,
					title: "message.menu.demoImg",
					icon: "icon-appstore",
					auth: 1,
					isLink: 0,
					isIframe: 0,
					address: "",
					isAffix: 1,
					isKeepAlive: 1,
					isDisable: 0,
					isHide: 0,
					isMobile: 0,
					roles: ["admin", "system"],
					permission: ["C", "R", "U", "D"],
					children: [],
				},
				{
					id: 912,
					path: "three",
					component: "demo/canvas/Three",
					type: 1,
					title: "message.menu.demoThree",
					icon: "icon-appstore",
					auth: 1,
					isLink: 0,
					isIframe: 0,
					address: "",
					isAffix: 1,
					isKeepAlive: 1,
					isDisable: 0,
					isHide: 0,
					isMobile: 0,
					roles: ["admin", "system"],
					permission: ["C", "R", "U", "D"],
					children: [],
				},
				{
					id: 913,
					path: "pdf",
					component: "demo/pdf/Index",
					type: 1,
					title: "message.menu.demoThree",
					icon: "icon-appstore",
					auth: 1,
					isLink: 0,
					isIframe: 0,
					address: "",
					isAffix: 1,
					isKeepAlive: 1,
					isDisable: 0,
					isHide: 0,
					isMobile: 0,
					roles: ["admin", "system"],
					permission: ["C", "R", "U", "D"],
					children: [],
				},
			],
		},
		{
			id: 991,
			path: "link",
			component: "layout/window/Link",
			type: 1,
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
			isMobile: 0,
			roles: ["admin", "system"],
			permission: ["C", "R", "U", "D"],
			children: [],
		},
		{
			id: 992,
			path: "iframe",
			component: "layout/window/Iframe",
			type: 1,
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
			isMobile: 0,
			roles: ["admin", "system"],
			permission: ["C", "R", "U", "D"],
			children: [],
		},
		{
			id: 9000,
			path: "m-home",
			component: "mobile/MHome",
			type: 1,
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
			isMobile: 1,
			roles: ["admin", "system"],
			permission: ["C", "R", "U", "D"],
			children: [],
		},
	],
};
