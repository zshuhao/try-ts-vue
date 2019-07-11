import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import VuexPersistence from 'vuex-persist'
import actions from './actions'
import mutations from './mutations'
import state from './state'
import getters from './getters'
import { RootStateTypes } from './types'
// modules
import { userInfo } from './modules/user'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence<RootStateTypes>({
    storage: window.localStorage
})

const store: StoreOptions<RootStateTypes> = {
    actions,
    mutations,
    getters,
    state,
    modules: { // 自定义模块
        userInfo
    },
    plugins: [vuexLocal.plugin]
}

export default new Vuex.Store<RootStateTypes>(store)
