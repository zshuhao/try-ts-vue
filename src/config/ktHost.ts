
interface KtApi {
    [index: string]: string
}

const ktApi = {
    dev: 'http://crm_admin.infp.test.cn', // 开天提供的接口
    test: 'http://crm_admin.infp.test.cn',
    production: 'http://kt.mwee.cn'
} as KtApi

export default ktApi
