
export const urlParse = function (url: string) {
    url = url || window.location.search
    let obj = {} as any
    // 一般来说，末尾不需要匹配#,但存在部分服务对哈希处理不好的情况
    let reg = /[?&][^?&]+=[^?&|#]+/g
    let arr = url.match(reg)
    if (!arr) return obj
    // ['id=1232','&name=jack']
    arr.forEach((item) => {
        let temp = item.substr(1).split('=')
        let key = decodeURIComponent(temp[0])
        let val = decodeURIComponent(temp[1])
        obj[key] = val
    })
    console.log(obj)
    return obj
}
