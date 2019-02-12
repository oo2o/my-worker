import Vue from 'vue';
import VueRouter from 'vue-router';
import { routers } from './router';
// 将路由器注入Vue实例
Vue.use(VueRouter);

// 路由配置
const RouterConfig = {
    mode: 'history',
    scrollBehavior(to) {
        if (to.hash) { // 如果有锚点
            try {
                document.querySelector(to.hash)
                return {
                    selector: to.hash
                }
            } catch(err) { 
                console.log(err)
            }
        }
        return { x: 0, y: 0 }
    },
    routes: routers
};
// 创建路由实例
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    let token = window.localStorage.getItem('token');
    window.document.title = to.meta.title || 'CruIse'
	// 没有token，且非登录，注册路由都跳转到登录页面
	if (!token && to.path !== '/login' && to.path !== '/register') {
		next({ path: '/login' });
	// 是登录和注册页直接放行
	} else if(to.path == '/login' || to.path == '/register') {
		next();
	// 带token且非登录，注册，正常放行
	} else {
        router.app.$store.dispatch('KeepOnline', { ctx: router.app, to, next });
        if (!to.matched || to.matched.length <= 0) {
            return next({ name: 'error-not-impl' })
        }        
        next();
	}
});

router.afterEach((to) => {
	// 如果是去登录页，则自动退出登录
	if(to.path === '/login') {
		router.app.$store.dispatch('Logout', { ctx: router.app });
	}
	window.scrollTo(0, 0);
});


export default router
