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
    @Mutation setOaAccess: any
    @State oaAccess: any

    userInfo: any = {}
    leftMenuList: object[] = [] // 左侧菜单

    async mounted () {
        let href = decodeURIComponent(window.location.href)
        let params = urlParse(href)
        let oatoken = params.infp_oa_token
        // 只要有infp_oa_token过来的时候，就验证登录
        if (oatoken && oatoken !== 'undefined') {
            let oaAccess = {
                token: params.infp_oa_token
            }
            this.setOaAccess(params.infp_oa_token)
            let { token } = this.oaAccess
            if (token) {
                this.getNavMenu(token) // 获取右上部分的菜单
                this.getLeftMenu(token) // 获取左侧菜单 getLeftMenu
                // 如果企业微信传值加密手机号码
                let result = await this.getAccessToken(token, this.getPermisson)
                if (!result) {
                    this.getOACode(this.$route.path)
                }
            }
        } else {
            this.getOACode(this.$route.path)
        }
    }

    getLeftMenu (token: string) { // 用办公的menu_id 148获取到所有子菜单
        let idStr = `menu_id=148`
        this.$ajax({
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'infp-oa-token': token
            },
            data: idStr,
            type: 'getMenu'
        }).then((res: any) => {
            if (res.data && res.data.data && res.data.data.menu) {
                this.leftMenuList = res.data.data.menu
                console.log(this.leftMenuList)
            } else {
                this.leftMenuList = []
            }
        })
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
