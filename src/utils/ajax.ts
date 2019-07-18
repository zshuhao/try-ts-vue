import axios from 'axios'
import ENV from '../config/env'
import urlDict from '../config/urlDict'
import api from '../config/apiHost'
import ktApi from '../config/ktHost'
import basicToken from '../config/basicToken'
import store from '../store/index'

let protocol = ENV === 'production' ? 'https:' : 'http:'

axios.defaults.timeout = 30000 // 请求的超时时间

let ajax = (options:any) => {
    let header = options.headers || options.header || {
        'Content-Type': 'application/json;charset=UTF-8'
    }
    if (urlDict[options.type].needLogin) { // needLogin
        header.Authorization = `Bearer ${store.state.accessToken.token}`
    } else {
        header.Authorization = `Basic ${basicToken}`
    }
    options.headers = header
    options.method = options.method || 'post'
    if (urlDict[options.type].needKtAuth) {
        options.url = ktApi[ENV] + urlDict[options.type].url
        options.headers = {
            'Content-Type': 'application/json'
        }
        if (store.state.ktAccess.token) {
            options.headers['infp-kt-token'] = `${store.state.ktAccess.token}`
        }
    } else {
        options.url = api[ENV] + urlDict[options.type].url
    }
    !options.data && (options.data = {})
    if (options.method.toUpperCase() === 'GET') {
        options.params = options.data || {}
    } else {
        options.data = options.data || {}
    }
    // console.log(options)
    return axios(options)
}

export default ajax
