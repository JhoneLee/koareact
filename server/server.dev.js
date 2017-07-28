// /*
// * @Author: liyunjiao
// * @Date:   2017-06-08 10:57:48
// * @Last Modified by:   liyunjiao
// * @Last Modified time: 2017-06-08 11:41:21
// */
// // 提供regenerator运行时和core-js来模拟全功能ES6环境
// require('babel-polyfill');
// // babel sourceMap支持
// require('source-map-support').install();
// // 对require命令所加载的js文件进行实时转码，这个库只适用于开发环境
// require('babel-register')({
//     presets: ['es2015', 'react', 'stage-0'],
//     plugins: ['add-module-exports']
// });
// // require css文件支持
// require('css-modules-require-hook')({
//     extensions: ['.scss'],
//     preprocessCss: (data, filename) =>
//         require('node-sass').renderSync({
//             data,
//             file: filename
//         }).css,
//     camelCase: true,
//     generateScopedName: '[name]__[local]__[hash:base64:8]'
// });

// // require 图片，小于8K用base64，大于8k路径引用。
// require('asset-require-hook')({
//     name: '/[hash].[ext]',
//     extensions: ['jpg', 'png', 'gif', 'webp'],
//     limit: 8000
// });
// // koa配置--学习
// const app = require('./app.js'),
//     convert = require('koa-convert'),
//     webpack = require('webpack'),
//     fs = require('fs'),
//     path = require('path'),
//     devMiddleware = require('koa-webpack-dev-middleware'),
//     hotMiddleware = require('koa-webpack-hot-middleware'),
//     views = require('koa-views'),
//     router = require('./routes'),
//     clientRoute = require('./middlewares/clientRoute'),
//     config = require('../build/webpack.dev.config'),
//     port = process.env.port || 3000, //端口号
//     compiler = webpack(config)

// // Webpack时间钩子，将html文件从`/views/tpl` 写入`/views/dev` ，用于服务端渲染
// compiler.plugin('emit', (compilation, callback) => {
//     const assets = compilation.assets
//     var file, data

//     Object.keys(assets).forEach(key => {
//         if (key.match(/\.html$/)) {
//             file = path.resolve(__dirname, key)
//             data = assets[key].source()
//             fs.writeFileSync(file, data)
//         }
//     })
//     callback()
// });

// app.use(views(path.resolve(__dirname, '../views/dev'), {map: {html: 'ejs'}}))
// app.use(clientRoute)
// app.use(router.routes())
// app.use(router.allowedMethods())
// console.log(`\n==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.\n`)
// app.use(convert(devMiddleware(compiler, {
//     noInfo: true,
//     publicPath: config.output.publicPath
// })))
// app.use(convert(hotMiddleware(compiler)))
// app.listen(port)





'use strict';
// Provide custom regenerator runtime and core-js
require('babel-polyfill')

// Node babel source map support
require('source-map-support').install()

// Javascript require hook
require('babel-register')({
    presets: ['es2015', 'react', 'stage-0'],
    plugins: ['add-module-exports']
})

// Css require hook
require('css-modules-require-hook')({
    extensions: ['.scss'],
    preprocessCss: (data, filename) =>
        require('node-sass').renderSync({
            data,
            file: filename
        }).css,
    camelCase: true,
    generateScopedName: '[name]__[local]__[hash:base64:8]'
})

// Image require hook
require('asset-require-hook')({
    name: '/[hash].[ext]',
    extensions: ['jpg', 'png', 'gif', 'webp'],
    limit: 8000
})

const app = require('./app.js'),
    convert = require('koa-convert'),
    webpack = require('webpack'),
    fs = require('fs'),
    path = require('path'),
    devMiddleware = require('koa-webpack-dev-middleware'),
    hotMiddleware = require('koa-webpack-hot-middleware'),
    views = require('koa-views'),
    router = require('./routes'),
    clientRoute = require('./middlewares/clientRoute'),
    config = require('../build/webpack.dev.config'),
    port = process.env.port || 3000,
    compiler = webpack(config)

// Webpack hook event to write html file into `/views/dev` from `/views/tpl` due to server render
compiler.plugin('emit', (compilation, callback) => {
    const assets = compilation.assets
    let file, data

    Object.keys(assets).forEach(key => {
        if (key.match(/\.html$/)) {
            file = path.resolve(__dirname, key)
            data = assets[key].source()
            fs.writeFileSync(file, data)
        }
    })
    callback()
})

app.use(views(path.resolve(__dirname, '../views/dev'), {map: {html: 'ejs'}}))
app.use(clientRoute)
app.use(router.routes())
app.use(router.allowedMethods())
console.log(`\n==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.\n`)
app.use(convert(devMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
})))
app.use(convert(hotMiddleware(compiler)))
app.listen(port)