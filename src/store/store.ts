import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        accessToken: { // 用户请求认证，Authorization携带
            token: '',
            md5Code: '', // php传递过来的加密的手机号码
            expired: Date.now() // 失效时间，以毫秒数记录
        },
        oaAccess: {
            token: '12121212123333',
            expired: Date.now() // 失效时间，以毫秒数记录

        },
        userInfo: { // 用户信息
            persistence: true,
            default: {
                userName: '',
                apartment: '',
                companyName: '美味不用等(上海)信息科技股份有限公司'
            }
        },
        rememberMe: { // 存放记住密码
            persistence: true,
            default: {
                username: '',
                password: '',
                grant_type: 'password'
            }
        }
    },
    mutations: {

    },
    actions: {

    },
    getters: {
        getOaAccess (state) {
            return state.oaAccess
        }
    }
})
