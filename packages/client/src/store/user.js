const state = {
    session: {
        logined: false,
        user: null,
        accessToken: ''
    },
    permission: null,

}
const mutations = {
    SET_ACCESSTOKEN(state, token){
        state.session.accessToken = token
    },
    SET_USERINFO(state, userinfo){
        if(userinfo){
            state.session.user = userinfo
            state.session.accessToken = userinfo.accessToken
            window.localStorage.setItem('token', userinfo.accessToken)
            window.localStorage.setItem('username', userinfo.username)

        }else{
            state.session = {
				accessToken: '',
				logined: false,
				user: null
			}
            window.localStorage.removeItem('token')
            window.localStorage.removeItem('username')
        }
       
    },
    SET_LOGINED(state, status){
        state.session.logined = status
    },
    SET_PERMISSION(state, permission){
        state.permission = permission
    }
}

const actions = {
    Login({ commit }, user){
        commit('SET_LOGINED', true)
        commit('SET_USERINFO', user)
    },
    Logout({ commit }, { ctx }){
        commit('SET_LOGINED', false)
        commit('SET_USERINFO', null)
        commit('SET_PERMISSION', '')
        ctx.$http.defaults.headers.common['x-access-token'] = '';
    },
    SetUserinfo({commit}, user){
        commit('SET_USERINFO', user)
    },
    KeepOnline({ commit, state }, { ctx }){
        if(state.session.logined) {
			console.log('--> online');
			return ;
        }
        let token = localStorage.getItem('token');
		if(!token) {
			console.log('没有token信息！');
			console.log('--> offline');
            return ;
        }
        commit('SET_ACCESSTOKEN', token)
		ctx.$http.defaults.headers.common['x-access-token'] = token;
		console.log('1.updated token!')
		// 用户信息
		if(!state.session.user) {
			// commit('SET_USERINFO', await GetUserInfo())
			console.log('2.updated user info!')
        }
    }
}

const getters = {
    logined: state => state.session.logined,
    accessToken: state => state.session.accessToken,
    session: state => state.session,
    permission: state => state.permission
}

export default {
    state,
    mutations,
    actions,
    getters
}