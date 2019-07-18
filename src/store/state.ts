
import { RootStateTypes } from './types'
const state: RootStateTypes = {
    author: '陈小生',
    accessToken: {
        token: ''
    },
    ktAccess: {
        token: ''
    }
}

export default state

// import Vue from 'vue'
// import Vuex, { ActionTree } from 'vuex'
// import VuexPersistence from 'vuex-persist'
// Vue.use(Vuex)

// const vuexLocal = new VuexPersistence({
//     storage: window.localStorage
// })
// interface RootStateTypes {
//     info: string;
//     [propName: string]: any
// }
// const state: RootStateTypes = {
//     info: '1111'
// }
// const mutations = {

// }
// const actions: ActionTree<RootStateTypes, any> = {

// }

// export default new Vuex.Store({
//     state,
//     mutations,
//     actions,
//     plugins: [vuexLocal.plugin]
// })
