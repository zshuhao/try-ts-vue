
// import ENV from './env'
// import javaApi from './javaApi'
// import phpApi from './phpApi'

// const protocol: string = ENV === 'production' ? 'https:' : 'http:'

let urlDict = {
    token: {
        url: '/auth/secret/token', // 获取accessToken，密文交换的形式
        needLogin: false
    },
    accessToken: {
        url: '/auth/oauth/token', // 获取accessToken，登录交换的形式
        needLogin: false
    },
    userPermission: {
        url: '/auth/user/getUserPermissions', // 获取用户信息
        needLogin: true
    },
    getKtMenu: {
        url: '/api/web/getMenu', // 获取开天菜单
        needKtAuth: true
    }
} as any

export default urlDict
