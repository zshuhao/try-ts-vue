import store from '../store'

// 检查是否在登录状态
const checkLogin = () => {
    const auth = store.state.accessToken
    const ktAuth = store.state.ktAccess
    const currentTime = new Date()
    if (auth.token && auth.token !== 'undefined' && ktAuth.token && (ktAuth.token !== 'undefined')) {
        return !(currentTime > new Date(auth.expired) && currentTime > new Date(ktAuth.expired))
    } else {
        return false
    }
}
export default checkLogin
