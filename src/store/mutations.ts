// import state from './state'
import { RootStateTypes } from './types'
import { MutationTree } from 'vuex'

const mutations: MutationTree<RootStateTypes> = {
    setAccessToken (state: RootStateTypes, data: string) {
        state.accessToken.token = data
    },
    setKtAccess (state: RootStateTypes, data: string) {
        state.ktAccess.token = data
    }
}

export default mutations
