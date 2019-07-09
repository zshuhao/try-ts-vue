import axios from 'axios'
import ENV from '../config/env'
import urlDict from '../config/urlDict'
import phpApi from '../config/phpApi'
import javaApi from '../config/javaApi'
import basicToken from '../config/basicToken'
import store from '../store/index'

let protocol = ENV === 'production' ? 'https:' : 'http:'

axios.defaults.timeout = 30000 // 请求的超时时间

// const javaApi = {
//     test: '//kt-test.st.9now.net', // 测试环境
//     dev: '//kt-dev.st.9now.net',
//     // dev: '//10.0.17.177:7003', // 开发环境
//     production: '//gateway-infc.mwee.cn' // 正式环境
// }
// const phpApi = {
//     test: '//oa.test.9now.net', // 测试环境
//     dev: '//oa.test.9now.net', // 开发环境
//     production: '//oa.mwee.cn' // 正式环境
// }

let ajax = (options:any) => {
    let header = options.headers || options.header || {
        'Content-Type': 'application/json;charset=UTF-8'
    }
    if (urlDict[options.type].needLogin) {
        // console.log(store.state.accessToken.token)
        header.Authorization = `Bearer ${store.state.accessToken.token}`
    } else {
        header.Authorization = `Basic ${basicToken}`
    }
    options.headers = header
    options.method = options.method || 'post'
    if (urlDict[options.type].needOaToken) {
        options.url = protocol + phpApi[ENV] + urlDict[options.type].url
        options.headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        if (store.state.oaAccess.token) {
            options.headers['infp-oa-token'] = `${store.state.oaAccess.token}`
        }
    } else {
        options.url = protocol + javaApi[ENV] + urlDict[options.type].url
    }
    !options.data && (options.data = {})
    if (options.method.toUpperCase() === 'GET') {
        options.params = options.data || {}
    } else {
        options.data = options.data || {}
    }
    console.log(options)
    return axios(options)
}

export default ajax
