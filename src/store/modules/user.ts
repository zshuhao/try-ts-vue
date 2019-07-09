
import { ActionTree, MutationTree, GetterTree, Module } from 'vuex'
import { RootStateTypes } from '../types'
interface UserState {
    user: string
}

const state: UserState = {
    user: '张'
}

const actions: ActionTree<UserState, RootStateTypes> = {
    setUserInfo ({ commit }, value): any {
        commit('uploadUserInfo', value)
    }
}

const mutations: MutationTree<UserState> = {
    uploadUserInfo (state, value: string) {
        state.user = value
    }
}

const getters: GetterTree<UserState, RootStateTypes> = {
    getUserInfo (state): string {
        const { user } = state
        return user
    }
}

const namespaced: boolean = true

export const userInfo: Module<UserState, RootStateTypes> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
}
