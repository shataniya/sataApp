<template>
    <div class="goodsinfo" style="position:relative;">
        <!-- 商品页面 -->
        <!-- <header class="goods-header">
            <a href="" class="goods-back">
                <span class="iconfont"></span>
            </a>
            <a href="" class="header-title">
                <span class="iconfont"></span>
            </a>
        </header> -->
        <!-- <h3>这是 goodspage 组件</h3> -->
        <div class="card" style="width:100%;background-color:#fff;">
            <img :src="this.goodspage.img" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title" style="display:flex;justify-content:space-between;">
                    <span style="font-size:20px;color:#fa7198;">{{ this.goodspage.price }}&nbsp;元</span><a href="" class="iconfont">&#xe739;&nbsp;分享</a>
                </h5>
                <p class="card-text" style="font-size:15px;color:#81c350;display:flex;justify-content:space-between;">
                    <span>{{ this.goodspage.title }}</span><span class="iconfont" style="color:#8254f7;font-size:15px;">&#xe7e2;&nbsp;{{ this.goodspage.like_count }}</span>
                </p>
                <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
            </div>
        </div>
        <p class="form-control">
            <span>发货&nbsp;&nbsp;&nbsp;</span>
            <span class="iconfont" style="color:#f61d4b;">&#xe670;</span>
            <span style="color:black;color:#8254f7;">&nbsp;&nbsp;{{ this.goodspage.source }}&nbsp;&nbsp;&nbsp;&nbsp;快递：免运费</span>
        </p>
        <div class="form-control" style="display:flex;justify-content:space-between;">
            <p style="line-height:26px;"><span>服务</span><span style="color:black;color:#8254f7;">&nbsp;&nbsp;&nbsp;7天无理由&nbsp;&nbsp;&nbsp;运费险</span></p>
            <span class="iconfont" style="font-size:15px;">&#xe775;</span>
        </div>
        <div>
            <div class="form-control" style="display:flex;justify-content:space-between;">
                <p style="line-height:26px;font-weight:400;"><span>选择</span><span style="color:black;color:#8254f7;">&nbsp;&nbsp;&nbsp;选择&nbsp;颜色分类,尺寸</span></p>
                <span class="iconfont" style="font-size:15px;">&#xe775;</span>
            </div>
            <div></div>
        </div>
        <div class="form-control" style="display:flex;justify-content:space-between;">
            <p style="line-height:26px;"><span>参数</span><span style="color:black;color:#8254f7;">&nbsp;&nbsp;&nbsp;品牌&nbsp;材质</span></p>
            <span class="iconfont" style="font-size:15px;">&#xe775;</span>
        </div>

        <!-- 猜你喜欢 -->
        <div class="form-control" style="display:flex;justify-content:space-between;line-height:26px;">
            <p><span style="color:#fa7189;">家庭用品</span><span style="color:#81c189;font-size:13px;">&nbsp;&nbsp;&nbsp;猜你喜欢的精选商品</span></p>
            <p style="color:#ff6700;"><span style="font-size:14px;float:left;">查看全部</span><span class="iconfont" style="font-size:15px;">&nbsp;&#xe775;</span></p>
        </div>
        <ul class="more-goods">
            <li class="more-item">
                <a href="" style="display:block;width:100%;text-decoration:none;">
                    <div class="card" style="width:100%;">
                        <div style="width:122.844px;height:128.44px;margin:0 auto;">
                            <img src="http://i1.mifile.cn/a1/pms_1532079051.54116111!220x220.jpg" class="card-img-top" alt="..." style="width:100%;">
                        </div>
                        <div class="card-body text-center" style="padding:8px 20px;">
                            <h5 class="card-title" style="width:135.5px;margin-bottom:8px;color:#81c189;">米家互联网空调</h5>
                            <p class="card-text" style="margin-bottom:8px;">已出售：336件</p>
                            <a href="#" class="btn btn-sata btn-block">1999&nbsp;元</a>
                        </div>
                    </div>
                </a>
            </li>
            <li style="width:8px;float:left;"></li>
            <li class="more-item">
                <a href="" style="display:block;width:100%;text-decoration:none;">
                    <div class="card" style="width:100%;">
                        <div style="width:122.844px;height:128.44px;margin:0 auto;overflow:hidden;">
                            <img src="http://i1.mifile.cn/a1/pms_1504498936.11861982!220x220.jpg" class="card-img-top" alt="..." style="width:100%;">
                        </div>
                        <div class="card-body text-center" style="padding:8px 20px;">
                            <h5 class="card-title" style="width:135.5px;margin-bottom:8px;color:#81c189;">米家电水壶</h5>
                            <p class="card-text" style="margin-bottom:8px;">已出售：786件</p>
                            <a href="#" class="btn btn-sata btn-block">99&nbsp;元</a>
                        </div>
                    </div>
                </a>
            </li>
        </ul>

        <div class="form-control" style="width:100%;line-height:26px;display:flex;background-color:transparent;color:#8254f7;">
            <div style="flex:1;"></div>
            <p><span class="iconfont" style="font-size:25px;display:block;float:left;color:#8254f7;">&#xe871;</span>
            <span style="display:block;float:left;color:#8254f7;font-size:16px;">评价</span></p>
            <div style="flex:1;"></div>
        </div>

        <div class="form-control" style="width:100%;height:100%;">
            <div style="display:flex;justify-content:space-between;line-height:37px;padding:0;margin:0;height:37px;">
                <p><span style="color:#81c189;">宝贝评价</span><span style="color:#81c189;font-size:13px;"></span></p>
                <router-link :to="this.$route.path+'/comment'" style="color:#ff6700;text-decoration:none;"><span style="font-size:14px;float:left;">查看全部</span><span class="iconfont" style="font-size:15px;">&nbsp;&#xe775;</span></router-link>
            </div>
            <div style="margin-top:2px;">
                <span class="badge badge-pill badge-bli">&nbsp;质量好&nbsp;</span>
                <span class="badge badge-pill badge-grin">&nbsp;耐用&nbsp;</span>
                <span class="badge badge-pill badge-sata">&nbsp;性能好&nbsp;</span>
                <div class="card" style="width:100%;padding:8px 0;">
                    <div class="card-body" style="width:100%;padding:0;">
                        <h5 class="card-title">
                            <span class="iconfont" style="font-size:20px;">&#xe7e3;</span>
                            <span>&nbsp;你好骚啊</span>
                        </h5>
                        <p class="card-text" style="color:black;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;">真的非常好用，绝对好评，棒棒的~~</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- <comment></comment> -->

        <!-- 商品点击购买，加入购物车 -->
        
    </div>
</template>

<script>

import Comment from "../subcomponents/comment.vue";

import { Toast } from "mint-ui";

export default {
    data(){
        return {
            goodspage:null,
        }
    },
    created(){
        this.getgoodspage();
    },
    methods:{
        getgoodspage(){
            // console.log("enter getgoodspage");
            this.$http.get("http://127.0.0.1:3002"+this.$route.path).then(function(response){
                if(response.body.status == 0){
                    this.goodspage = response.body;
                    // console.log(this.goodspage);
                }else{
                    Toast("加载失败了...");
                }
            });
        },
    },
    components:{
        "comment": Comment,
    },
}
</script>

<style scoped>

/* .goodsinfo{
    position: absolute;
    top: 0;
    left: 0;
} */

.card{
    border: 0;
}
.card > .card-body > .card-title > .iconfont{
    font-size:15px;
    color:#8254f7;
    line-height:17px;
    text-decoration:none;
}
.card > .card-body > .card-text{

}
.form-control{
    margin: 8px 0;
    border: 0;
}
.form-control > span{
    display: block;
    float: left;
    color: #9b9b9b;
    line-height: 24px;
    font-size: 14px;
}
.form-control > .iconfont{
    font-size: 23px;
}

.more-goods{
    width: 100%;
    display: flex;
    overflow: hidden;
}
.more-goods > .more-item{
    flex: 1;
}
.more-goods .more-item .card .card-text,.card-title{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

.goodsinfo .badge{
    height:23px;
    line-height:17px;
    font-size:13px;
    font-weight:100;
}

</style>
