import ENV from './env'
// 存储默认token信息
let basicToken = {
    test: 'b21zOm9tcw==',
    dev: 'b21zOm9tcw==',
    production: 'b21zOmhyc2tBUkE3ZjNaZk5OdEY0TEtwOGk0YjlqR0ZzWjZi' // TODO 上线前要找钱升涛获取上线token
} as any

export default basicToken[ENV]
