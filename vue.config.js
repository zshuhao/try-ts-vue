module.exports = {
    configureWebpack: {
        devtool: 'source-map'
    }
    // configureWebpack: config => {
    //     // if (process.env.NODE_ENV === 'development') {
    //     //     config.devtool = 'eval-source-map'
    //     //     config.output.devtoolModuleFilenameTemplate = info =>
    //     //         info.resourcePath.match(/\.vue$/) && !info.identifier.match(/type=script/) // this is change
    //     //             ? `webpack-generated:///${info.resourcePath}?${info.hash}`
    //     //             : `webpack-yourCode:///${info.resourcePath}`

    //     //     config.output.devtoolFallbackModuleFilenameTemplate = 'webpack:///[resource-path]?[hash]'
    //     // }
    //     // if (process.env.NODE_ENV === 'development') {
    //     //     config.devtool = 'eval-source-map'
    //     //     config.output.devtoolFallbackModuleFilenameTemplate = 'webpack:///[resource-path]?[hash]'
    //     //     config.output.devtoolModuleFilenameTemplate = info => {
    //     //         const isVue = info.resourcePath.match(/\.vue$/)
    //     //         const isScript = info.identifier.match(/type=script/)
    //     //         return isVue && !isScript
    //     //             ? `webpack-vue:///${info.resourcePath}`
    //     //             : `webpack-generated:///${info.resourcePath}?${info.hash}`
    //     //     }
    //     // }
    // }
}
