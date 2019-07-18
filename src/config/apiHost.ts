
interface Api {
    [index: string]: string
}

const api = {
    dev: 'http://kt-test.st.9now.net',
    test: 'http://kt-test.st.9now.net', // 测试环境
    production: 'http://gateway-infc.mwee.cn' // 正式环境
} as Api

export default api
