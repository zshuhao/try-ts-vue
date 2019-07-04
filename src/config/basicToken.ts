import ENV from './env'
// 存储默认token信息
let basicToken = {
    test: 'd29ya2Zsb3c6d29ya2Zsb3c=',
    dev: 'd29ya2Zsb3c6d29ya2Zsb3c=',
    // production: 'd29ya2xpc3Q6d29ya2xpc3Q='
    production: 'd29ya2Zsb3c6eHFqc2c3ZXJ6d3ppY2d2bWd6YTkxdzFmemY0M2ExcnE='
} as any

export default basicToken[ENV]
