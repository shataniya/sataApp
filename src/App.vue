<template>
    <div class="app-container">
        <!-- 顶部 Header 区域 -->
        <header class="app-header">
            <p><span class="iconfont">&#xe678;</span><span>sata</span></p>
        </header>

        <!-- 中间的 路由 router-view 区域 -->
        <main class="app-content">
            <transition>
                <router-view></router-view>
            </transition>
        </main>



        <!-- 底部 Tabbar 区域 -->
        <footer class="app-tabbar">
            <ul class="tabbar-content">
                <li class="content-item" @click="homechange">
                    <router-link to="/home" class="tabbar-item">
                        <span class="iconfont tabbar-home" v-if="homeflag">&#xe6b8;</span>
                        <span class="iconfont tabbar-home" v-if="!homeflag">&#xe6bb;</span>
                    </router-link>
                </li>
                <li class="content-item" @click="interestchange">
                    <router-link to="/interest" class="tabbar-item">
                        <span class="iconfont tabbar-interest" v-if="interestflag">&#xe6f5;</span>
                        <span class="iconfont tabbar-interest" v-if="!interestflag">&#xe6f4;</span>
                    </router-link>
                </li>
                <li class="content-item" @click="messagechange">
                    <router-link to="/message" class="tabbar-item">
                        <span class="iconfont tabbar-message" v-if="messageflag">&#xe736;</span>
                        <span class="iconfont tabbar-message" v-if="!messageflag">&#xe735;</span>
                    </router-link>
                </li>
                <li class="content-item" @click="shopcarchange">
                    <router-link to="/shopcar" class="tabbar-item">
                        <span class="iconfont tabbar-shopcar" v-if="shopcarflag">&#xe640;</span>
                        <span class="iconfont tabbar-shopcar" v-if="!shopcarflag">&#xe63f;</span>
                    </router-link>
                </li>
                <li class="content-item" @click="memberchange">
                    <router-link to="/member" class="tabbar-item">
                        <span class="iconfont tabbar-member" v-if="memberflag">&#xe73b;</span>
                        <span class="iconfont tabbar-member" v-if="!memberflag">&#xe738;</span>
                    </router-link>
                </li>
            </ul>
        </footer>
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            // 默认是 true
            homeflag:true,
            interestflag:true,
            messageflag:true,
            shopcarflag:true,
            memberflag:true,
        }
    },
    methods:{
        homechange(){
            // 如果是 true，就变成 false
            if(this.homeflag){
                this.homeflag = !this.homeflag;
            }
            this.interestflag = true;
            this.messageflag = true;
            this.shopcarflag = true;
            this.memberflag = true;
        },
        interestchange(){
            if(this.interestflag){
                this.interestflag = !this.interestflag;
            }
            this.homeflag = true;
            this.messageflag = true;
            this.shopcarflag = true;
            this.memberflag = true;
        },
        messagechange(){
            if(this.messageflag){
                this.messageflag = !this.messageflag;
            }
            this.homeflag = true;
            this.interestflag = true;
            this.shopcarflag = true;
            this.memberflag = true;
        },
        shopcarchange(){
            this.homeflag = true;
            this.interestflag = true;
            this.messageflag = true;
            // this.shopcarflag = !this.shopcarflag;
            this.memberflag = true;
        },
        memberchange(){
            if(this.memberflag){
                this.memberflag = !this.memberflag;
            }
            this.homeflag = true;
            this.interestflag = true;
            this.messageflag = true;
            this.shopcarflag = true;
        },
    },
}
</script>

<style scoped>

.app-container{
    box-sizing: border-box;
    position: relative;
    width: 100%;
    padding:60px 0px;
    overflow-x: hidden;
    background-color: #f9f9f9;
}

.app-header{
    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
    line-height: 57px;
    background-color: #8254f7;
    z-index: 999;
}
.app-header > p{
    color: #fff;
    font-size: 23px;
    text-align: center;
}
.app-header > p > .iconfont{
    font-size: 30px;
}

.app-tabbar{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 61px;
    /* line-height: 57px; */
    border-top: 1px solid #e7e7e7;
    /* background-color: #fff; */
}
.app-tabbar .tabbar-content{
    width: 100%;
    /* height: 60px;
    line-height: 57px; */
    background-color: #fff;
    display: flex;
}
.tabbar-content > .content-item{
    box-sizing: border-box;
    flex: 1;
    float: left;
}
.tabbar-content > .content-item > .tabbar-item{
    display: block;
    box-sizing: border-box;
    height: 60px;
    line-height: 57px;
    color: #8254f7;
    text-align: center;
    text-decoration: none;
}
.app-tabbar .tabbar-home,.tabbar-interest,.tabbar-message,.tabbar-shopcar,.tabbar-member{
    font-size: 30px;
}
.app-tabbar  .tabbar-item:active{
    text-decoration: none;
}

.app-content{
    box-sizing: border-box;
    /* position: relative; 这里添加 position：relative 来防止内容上下移动 */
    padding: 8px;
    overflow-x: hidden;
}

</style>


