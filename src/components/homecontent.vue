<template>
    <div class="homecontent">
        <!-- <mt-swipe :auto="4000">
            <mt-swipe-item>
                <img src="http://i1.mifile.cn/a4/xmad_15554080824205_AMwsQ.jpg">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="http://i1.mifile.cn/a4/xmad_15529884424562_HKYaG.jpg">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="http://i1.mifile.cn/a4/xmad_15451099978864_zHauD.jpg">
            </mt-swipe-item>
        </mt-swipe> -->

        <!-- 轮播图 -->
        <div id="slide" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img :src="homeslide.img1" class="d-block" alt="...">
                </div>
                <div class="carousel-item">
                    <img :src="homeslide.img2" class="d-block" alt="...">
                </div>
                <div class="carousel-item">
                    <img :src="homeslide.img3" class="d-block" alt="...">
                </div>
            </div>
            <a class="carousel-control-prev" href="#slide" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#slide" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>

        <!-- 商品展示 -->
        <main class="goodslist" v-for="item in homegoods" :key="item.id">
            <ul class="goods-item">
                <li class="list-item">
                    <router-link :to="'/home/goodspage/'+item.goods[0].goodsid" class="list-item-link">
                        <div class="item-show">
                            <img :src="item.goods[0].img">
                        </div>
                        <p class="item-title" style="color:#8254f7;margin-top:8px;margin-bottom:2px;">{{ item.goods[0].title }}</p>
                        <p class="item-price" style="color:#b0b0b0"><span style="color:#81c350;">{{ item.goods[0].price }}&nbsp;元</span></p>
                    </router-link>
                </li>
                <li class="mid"></li>
                <li class="list-item">
                    <router-link :to="'/home/goodspage/'+item.goods[1].goodsid" class="list-item-link">
                        <div class="item-show">
                            <img :src="item.goods[1].img">
                        </div>
                        <p class="item-title" style="color:#8254f7;margin-top:8px;margin-bottom:2px;">{{ item.goods[1].title }}</p>
                        <p class="item-price" style="color:#b0b0b0"><span style="color:#81c350;">{{ item.goods[1].price }}&nbsp;元</span></p>
                    </router-link>
                </li>
            </ul>
            <ul class="goods-item">
                <li class="list-item">
                    <router-link :to="'/home/goodspage/'+item.goods[2].goodsid" class="list-item-link">
                         <div class="item-show">
                            <img :src="item.goods[2].img">
                        </div>
                        <p class="item-title" style="color:#8254f7;margin-top:8px;margin-bottom:2px;">{{ item.goods[2].title }}</p>
                        <p class="item-price" style="color:#b0b0b0"><span style="color:#81c350;">{{ item.goods[2].price }}&nbsp;元</span></p>
                    </router-link>
                </li>
                <li class="mid"></li>
                <li class="list-item">
                    <router-link :to="'/home/goodspage/'+item.goods[3].goodsid" class="list-item-link">
                        <div class="item-show">
                            <img :src="item.goods[3].img">
                        </div>
                        <p class="item-title" style="color:#8254f7;margin-top:8px;margin-bottom:2px;">{{ item.goods[3].title }}</p>
                        <p class="item-price" style="color:#b0b0b0"><span style="color:#81c350;">{{ item.goods[3].price }}&nbsp;元</span></p>
                    </router-link>
                </li>
            </ul>
            <div class="goods-ad">
                <img :src="item.img" alt="">
            </div>
        </main>

    </div>
</template>

<script>

import { Toast } from "mint-ui";

export default {
    data(){
        return {
            homeslide:null,
            homegoods:null,
        }
    },
    // created(){
    //     this.gethome();
    // },
    created(){
        // console.log(Number(this.homeslide));
        this.gethome();
    },
    methods:{
        gethome(){
            // console.log("enter gethome");
            this.$http.get("http://127.0.0.1:3002/home").then(function(response){
                // console.log(response.body.status);
                if(response.body.status == 0){
                    this.homeslide = response.body.slide.message[0];
                    this.homegoods = response.body.goods.message;
                }else{
                    Toast("加载失败了~~")
                }
            });
        },
    }
}
</script>

<style>

/* .homecontent::-webkit-scrollbar{ 
    display: none !important;
} */

.homecontent{
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    position: relative;
}

/* .mint-swipe{
    width: 100%;
}

.mint-swipe >.mint-swipe-items-wrap{
    width: 100%;
    height: 0;
    padding-bottom: 50%;
    overflow: hidden;
    position: relative;
}
.mint-swipe >.mint-swipe-items-wrap  img{
    height: 100%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
} */

.slide{
    box-sizing: border-box;
    width: 100%;
    /* padding: 8px; */
    position: relative;

}
.slide > .carousel-inner{
    width: 100%;
    border-radius: 5px;
    border: 1px solid rgba(238, 238, 243, 0.8);
    /* height: 0;
    padding-bottom: 50%;
    overflow: hidden;
    position: relative; */
}
.slide > .carousel-inner > .carousel-item{
    width: 100%;
    height: 0;
    padding-bottom: 60%;
    overflow: hidden;
    /* position: relative; */
}
.slide > .carousel-inner img{
    width: 160%;
    position: absolute;
    transform: translateX(-23%);
    border-radius: 10px;
}

.goodslist{
    width: 100%;
    /* margin-top: 8px; */
    background-color: #f9f9f9;
}
.goodslist > .goods-item{
    box-sizing: border-box;
    width: 100%;
    margin-top: 8px;
    display: flex;
}
.goodslist > .goods-item > .mid{
    width: 8px;
}
.goodslist > .goods-item > .list-item{
    flex: 1;
    height: 0;
    padding-bottom: 50%;
    overflow: hidden;
    box-sizing: border-box;
    background-color: #fff;
    /* box-shadow: 5px 5px 20px #f4f4f4; */
    float: left;
    border-radius: 3px;
}
.goodslist > .goods-item > .list-item:hover{
    box-shadow: 5px 5px 20px #f4f4f4;
    text-decoration: none;
}
.goodslist > .goods-item > .list-item > .list-item-link{
    display: block;
    width: 100%;
    text-align: center;
    text-decoration: none;
}
.goodslist > .goods-item > .list-item > .list-item-link:hover{
    text-decoration: none;
}
.goodslist > .goods-item > .list-item > .list-item-link > .item-show{
    width:100%;
    height:0;
    padding-bottom:70%;
    overflow:hidden;
    position:relative;
}
.goodslist > .goods-item > .list-item > .list-item-link > .item-show > img{
    width:65%;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
}

.goodslist > .goods-ad{
    width: 100%;
    height: 0;
    padding-bottom: 20%;
    margin-top: 8px;
    overflow: hidden;
    position: relative;
    border-radius: 3px;
}

.goodslist > .goods-ad > img{
    width: 220%;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-30%,-50%);
    border-radius: 5px;
}


</style>