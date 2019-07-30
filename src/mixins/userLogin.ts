// import oaRedirectHost from '../config/oaRedirectHost'
// import env from '../config/env'
// import backtoUs from '../config/backtoUs'

import { Vue, Component } from 'vue-property-decorator'
import { Mutation } from 'vuex-class'
import { Message } from 'element-ui'
import env from '../config/env'
import ktApi from '../config/ktHost'
import backtoUs from '../config/backtoUs'
@Component({})
export default class UserLogin extends Vue {
    @Mutation setAccessToken: any
    menuList: object[] = []

    getAccessToken (token: string, cb?: any): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            let tokenStr = `auth_data=${token}&grant_type=secret`
            this.$ajax({
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                method: 'POST',
                type: 'token',
                data: tokenStr,
                getToken: true
            }).then((res: any) => {
                if (res.status === 200) {
                    this.setAccessToken(res.data.access_token)
                    resolve(true)
                    cb && cb()
                } else {
                    resolve(false)
                }
            }).catch((err: any) => {
                if (err) {
                    resolve(false)
                }
            })
        })
    }

    getPermisson () { // 获取用户信息
        this.$ajax({
            type: 'userPermission',
            method: 'GET'
        }).then((res: any) => {
            if (res.data.success && res.data.data) {
                this.$store.commit('USERINFO', res.data.data)
            }
        }).catch((err: any) => {
            this.$message(err.message)
        })
    }

    getKTCode (cbPath: string): void { // 获取OA的路由code
        let uri = ktApi[env]
        let cbUrl = encodeURIComponent(backtoUs[env])
        // token 失效 跳转页面重新获取token
        window.location.href = `${uri}/auth/redirectUrl?callback_url=${cbUrl}${cbPath}`
    }

    getMenu (token: string): void {
        this.$ajax({
            headers: {
                'Content-Type': 'application/json',
                'infp-kt-token': token
            },
            method: 'GET',
            type: 'getKtMenu'
        }).then((res: any) => {
            if (res.data.status) {
                Message.error(`${res.data.msg}`)
            } else {
                const { menus } = res.data.data
                this.$store.commit('KTMENU', menus)
            }
        }).catch(() => {
            Message.error(`请求错误`)
        })
    }
}
