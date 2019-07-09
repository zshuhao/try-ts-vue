import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import actions from './actions'
import mutations from './mutations'
import state from './state'
import getters from './getters'
import { RootStateTypes } from './types'
// modules
import { userInfo } from './modules/user'

Vue.use(Vuex)

const store: StoreOptions<RootStateTypes> = {
    actions,
    mutations,
    getters,
    state,
    modules: {
        // 添加自定义模块
        userInfo
    }
}

export default new Vuex.Store<RootStateTypes>(store)
