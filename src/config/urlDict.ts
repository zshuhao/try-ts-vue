
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
    },
    fetchGoodsList: { // 获取商品列表
        url: '/orderCenter/sku/page',
        needLogin: true
    },
    synceGoodsList: { // 同步erp商品
        url: '/orderCenter/manualTask/syncErpMaterial',
        needLogin: true
    },
    getGoodsInfo: { // 获取商品信息
        url: '/orderCenter/sku/:id',
        needLogin: true
    }
} as any

export default urlDict
