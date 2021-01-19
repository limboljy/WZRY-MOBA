const path = require('path')

const resolve = dir => path.join(__dirname,dir)

module.exports = {
    lintOnSave: false,
    chainWebpack: (config) => {
        //设置快捷路径，@表示‘src’，assets表示‘src/assets’
        config.resolve.alias
        .set('@',resolve('src'))
        .set('assets',resolve('src/assets'))
        .set('components',resolve('src/components'))
        .set('views',resolve('src/views'))
        .set('network',resolve('src/network'))
        //这里可以添加别名，按照格式.set('', resolve(''))
    }
}