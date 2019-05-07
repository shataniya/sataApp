import VueRouter from "vue-router";

// import Comment from "./components/subcomponents/comment.vue";

// 新闻资讯 newslist
// import NewsList from "./components/News/NewsList.vue";

import Home from "./components/homecontent.vue";
import Interest from "./components/interestcontent.vue";
import Member from "./components/membercontent.vue";
import Message from "./components/messagecontent.vue";
import Shopcar from "./components/shopcarcontent.vue";

import Goodspage from "./goods/goodspage.vue";
import Comment from "./subcomponents/comment.vue";



// 3.创建路由对象
var router = new VueRouter({
    routes:[
        { path:"/",redirect:"home" },
        { path:"/home", component: Home },
        { path:"/interest", component: Interest },
        { path:"/member", component: Member },
        { path:"/message", component: Message },
        { path:"/shopcar", component: Shopcar },
        { path:"/home/goodspage/:id", component: Goodspage },
        { path:"/home/goodspage/:id/comment" , component: Comment },
    ],
    // linkActiveClass:"mui-active",
    // linkActiveClass:"tabbar-active",
});

export default router;