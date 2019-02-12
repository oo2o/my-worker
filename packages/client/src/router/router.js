import Main from '../views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login'
    },
    component: () => import('../views/login.vue')
};

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: resolve => { require(['../views/error-page/404.vue'], resolve); }
};

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: resolve => { require(['../views/error-page/403.vue'], resolve); }
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: resolve => { require(['../views/error-page/500.vue'], resolve); }
};

export const pageNotImpl = {
    path: '/not-impl',
    meta: {
        title: '页面建设中'
    },
    name: 'error-not-impl',
    component: resolve => { require(['../views/error-page/not-impl.vue'], resolve); }
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    // name: 'otherRouter',
    component: Main,
    children: [{
        path: '',
        // redirect: '/devices/index'
        redirect: { name: 'agent.list' }
    }
    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path: '/dashboard',
        icon: 'dashboard',
        name: 'dashboard',
        title: 'DASHBOARD',
        component: Main,
        children: [
            {
                path: 'dashbord-list',
                name: 'dashbord.list',
                component: () => import('../views/dashbord/list.vue'),
                meta: {
                    title: 'DASHBORD'
                }
            },
        ]
    },
    {
        path: '/agent',
        icon: 'sitemap',
        name: 'agent',
        title: 'AGENT',
        component: Main,
        children: [
            {
                path: 'agent-list',
                name: 'agent.list',
                component: () => import('../views/agent/list.vue'),
                meta: {
                    title: 'AGENT'
                }
            },
        ]        
    },
    {
        path: '/my-cruise',
        icon: 'boat',
        name: 'my.cruise',
        title: 'MY CRUISE',
        component: Main,
        children: [
            {
                path: 'my-cruise-list',
                name: 'my.cruise.list',
                component: () => import('../views/my-cruise/list.vue'),
                meta: {
                    title: 'MY CRUISE'
                }
            },
        ]
        
    },
    {
        path: '/help',
        icon: 'life-bouy',
        name: 'help',
        title: 'HELP',
        component: Main,
        children: [
            {
                path: 'help-list',
                name: 'help.list',
                component: () => import('../views/help/list.vue'),
                meta: {
                    title: 'HELP'
                }
            },
        ]
        
    },
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    otherRouter,
    ...appRouter,
    page500,
    page403,
    page404,
    pageNotImpl
];