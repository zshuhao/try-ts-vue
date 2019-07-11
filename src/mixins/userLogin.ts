import phpRedirect from '../config/phpRedirect'
import env from '../config/env'
import backtoUs from '../config/backtoUs'

import { Vue, Component } from 'vue-property-decorator'
import { Mutation } from 'vuex-class'
interface tex {
    type: string
}

@Component({})
export default class UserLogin extends Vue {
    @Mutation setAccessToken: any

    menuList: object[] = []

    getAccessToken (token: string, cb: any) {
        return new Promise((resolve, reject) => {
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
                    console.log('getAccessToken')
                    let accessToken = {
                        token: res.data.access_token,
                        expired: Date.now() + 7 * 24 * 3600 * 1000
                    }
                    console.log(res.data.access_token)
                    this.setAccessToken(res.data.access_token)
                    // this.$store.commit('ACCESSTOKEN', accessToken)
                    resolve(true)
                    cb && cb()
                } else {
                    resolve(false)
                }
            })
        })
    }
    getOACode (cbPath: string) { // 获取OA的路由code
        console.log(this)
        let params = {
            type: 'getMenu'
        }
        this.$ajax(params).then((res: any) => {
            console.log(res)
            console.log('================11111')
            if (res.data && res.data.data && res.data.data.redirect_url) {
                let uri = phpRedirect[env]
                let cbUrl = encodeURIComponent(backtoUs[env])
                // token 失效 跳转页面重新获取token
                window.location.href = `${uri}?callback_url=${cbUrl}${cbPath}`
            }
        })
    }
    getNavMenu (token: string) { // 获取OA的菜单
        this.$ajax({
            headers: {
                'Content-Type': 'application/json',
                'infp-oa-token': token
                // 'infp-oa-token': '68ffeba259d3ee7bc7868ba4ad9fbe23'
            },
            type: 'getMenu'
        }).then((res: any) => {
            if (res.data.status === 1000 || res.data.status === 1001 || res.data.data.redirect_url) {
                if (res.data.data.redirect_url) {
                    // 输入redirect_url链接之后跳转到OA测试环境去了
                    let url = res.data.data.redirect_url
                    window.location.href = url
                }
            } else {
                this.menuList = res.data.data.menu
                console.log(res.data.data.menu)
            }
        })
    }

    getPermisson () { // 获取用户信息
        console.log('getPermisson')
        this.$ajax({
            type: 'userPermission',
            method: 'GET'
        }).then((res: any) => {
            if (res.data.success && res.data.data) {
                // this.userInfo = res.data.data.userName
                console.log(res.data.data)
                // this.$store.commit('USERINFO', res.data.data)
                // this.$router.push('/new')
                // this.userInfo = res.data.data
            }
        })
    }
}
