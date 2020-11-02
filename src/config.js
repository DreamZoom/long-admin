import YingAdmin from "ying-admin"
export default {
    title:"后台管理Demo",
    client:{
        client_id:"manager",
        client_secret:"123456"
    },
    routes: [{
        path: "/",
        component: YingAdmin.YingLayout,
        redirect:"home",
        children: [{
            name: "首页",
            path: "home",
            icon: "home",
            meta: { authority: ['ADMIN'] },
            component: () => import("./views/home/index")
        }, {
            name: "账户管理",
            path: "account",
            icon: "home",
            component: () => import("./views/account/index")
        }, {
            name: "角色管理",
            path: "role",
            icon: "home",
            component: () => import("./views/role/index")
        }, {
            name: "应用管理",
            path: "client",
            icon: "home",
            component: () => import("./views/client/index")
        }]
    }, {
        path: "/login",
        component: YingAdmin.YingLogin
    }]
}