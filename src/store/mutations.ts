// import state from './state'
import { RootStateTypes } from './types'
import { MutationTree } from 'vuex'

const mutations: MutationTree<RootStateTypes> = {
    setAccessToken (state: RootStateTypes, data: string) {
        state.accessToken.token = data
    },
    setOaAccess (state: RootStateTypes, data: string) {
        state.oaAccess.token = data
    }
}

export default mutations
