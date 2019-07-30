<template>
    <el-container>
        <el-header class="header">
            <Header />
        </el-header>
        <el-container class="mian-container">
            <Sider class="sider"/>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script lang="ts">
import { Vue, Component, Mixins } from 'vue-property-decorator'
import { urlParse } from '../utils/utils'
import { Mutation, State } from 'vuex-class'
import Header from './Header.vue'
import Sider from './Sider.vue'
import UserLogin from '../mixins/userLogin'
import checkLogin from '@/utils/checkLogin'
@Component({
    components: { Header, Sider }
})
export default class Home extends Mixins(UserLogin) {
    @Mutation setKtAccess: any
    @State ktAccess: any

    userInfo: any = {}
    leftMenuList: object[] = [] // 左侧菜单
    flag = false

    async created (): Promise<void> {
        const { query, path } = this.$route
        const queryToken = query.infp_kt_token
        // 如果url中有ktToken则每次都去获取accessToken，没有再去检测本地保存的ktToken是否在有效期内
        if (queryToken) {
            const ktAccess = {
                token: queryToken,
                expired: Date.now() + 0.1 * 3600 * 1000
            }
            this.$store.commit('KTACCESS', ktAccess)
            const { token } = this.$store.state.ktAccess
            this.flag = await this.getAccessToken(token)
            this.getMenu(token)
        } else if (checkLogin()) {
            const { token } = this.$store.state.ktAccess
            this.flag = true
            this.getMenu(token)
            this.getPermisson() // 获取用户信息
        } else {
            this.getKTCode(path)
        }
    }
}
</script>

<style lang="less" scoped>
.header {
    color: #666;
    background-color: #f8f8f8;
    border-bottom: 1px solid #ddd;
}

.el-main {
    padding-top: 10px;
    background-color: #eee;
}
.mian-container {
    height: calc(100% - 60px);
}
</style>
