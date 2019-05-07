const path = require("path");

const webpack = require("webpack");

const htmlWebpackPlugin = require("html-webpack-plugin");

const vueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
    entry:path.join(__dirname,"./src/main.js"),
    output:{
        publicPath:"/dist",
        path:path.join(__dirname,"./dist"),
        filename:"bundle.js"
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,"./src/index.html"),
            filename:"index2.html"
        }),
        new vueLoaderPlugin()
    ],
    module:{
        rules:[
            { test:/\.css$/, use:["style-loader","css-loader"] },
            { test:/\.(png|jpg|jpeg)$/, use:"url-loader" },
            { test:/\.(ttf|eot|svg|woff|woff2)/, use:"url-loader" },
            { test:/\.js$/, use:"babel-loader",exclude:/node_modules/ },
            { test:/\.vue$/, use:"vue-loader" }
        ]
    },
    resolve:{
        alias:{ // 修改 Vue 被导入时候的包的路径
            "vue$":"vue/dist/vue.js" //如果没有这个，那么 vue 导入的就是 runtime-only 的包，是不完整的
        }
    },
};