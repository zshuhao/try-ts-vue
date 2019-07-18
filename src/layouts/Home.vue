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
import Header from './Header.vue'
import Sider from './Sider.vue'
import UserLogin from '../mixins/userLogin'
import { urlParse } from '../utils/utils'
import { Mutation, State } from 'vuex-class'

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
        const query = this.$route.query
        this.setKtAccess(query.infp_kt_token || '')
        const { token } = this.ktAccess
        if (token) {
            this.flag = await this.getAccessToken(token)
            // this.getLeftMenu(token)
        } else {
            // 跳回去重新拉infp_kt_token
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
