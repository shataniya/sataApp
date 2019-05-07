import Vue from "vue";

import MintUI from "mint-ui";

import "mint-ui/lib/style.css";

Vue.use(MintUI);

import app from "./App.vue";

import $ from "jquery/dist/jquery.js";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

import '@fortawesome/fontawesome-free/css/fontawesome.css';

import '@fortawesome/fontawesome-free/css/all.css';

import "./css/index.css";

import "./lib/mui/css/mui.css";
import "./lib/mui/css/icons-extra.css";
// import "./lib/mui/js/mui.js";
// import mui from "./lib/mui/js/mui.min.js";
// import "./lib/mui/js/mui.min.js";

import VueRouter from "vue-router";
Vue.use(VueRouter);

import router from "./router.js";

import VueResource from "vue-resource";
Vue.use(VueResource);

// 引入 iconfont 的样式，字体文件
import "./lib/font_1148608_wih9ij6ko78/iconfont.css";

// 设置请求的根路径
// Vue.http.options.root = "127.0.0.1:3002"

$(function(){
    var vm = new Vue({
        el:"#app",
        render:c => c(app),
        router:router,
    });
});
