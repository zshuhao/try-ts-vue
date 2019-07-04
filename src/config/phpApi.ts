
interface Foo {
    [index: string]: any
}

const phpApi = {
    test: '//oa.test.9now.net', // 测试环境
    dev: '//oa.test.9now.net', // 开发环境
    production: '//oa.mwee.cn' // 正式环境
} as any

export default phpApi
