
interface Foo {
    [x: string]: any
}

const javaApi = {
    test: '//kt-test.st.9now.net', // 测试环境
    dev: '//kt-dev.st.9now.net',
    // dev: '//10.0.17.177:7003', // 开发环境
    production: '//gateway-infc.mwee.cn' // 正式环境
} as any

export default javaApi
